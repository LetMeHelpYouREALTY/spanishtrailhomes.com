# Build Issue Automation System

## Overview

This repository includes an **automated system** to detect, fix, verify, and resolve build issues autonomously. The system operates at multiple levels to catch and fix issues before they reach production.

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    AUTOMATION LAYERS                         │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Layer 1: LOCAL PRE-COMMIT VALIDATION                       │
│  ├─ scripts/pre-commit-build-check.sh                       │
│  ├─ Runs before every commit                                │
│  ├─ Detects common issues (quotes, conflicts)               │
│  └─ Blocks commit if build fails                            │
│                                                              │
│  Layer 2: CI AUTO-FIX ON PUSH/PR                            │
│  ├─ .github/workflows/auto-fix-build.yml                    │
│  ├─ Triggers on every push and PR                           │
│  ├─ Automatically fixes common issues                       │
│  ├─ Commits and pushes fixes                                │
│  └─ Comments on PRs with results                            │
│                                                              │
│  Layer 3: CONTINUOUS MONITORING                             │
│  ├─ .github/workflows/build-monitor.yml                     │
│  ├─ Runs every 6 hours + on-demand                          │
│  ├─ Creates alerts for build failures                       │
│  └─ Tracks build metrics and health                         │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Components

### 1. Pre-Commit Hook (Local)

**Location**: `scripts/pre-commit-build-check.sh`

**Purpose**: Prevent broken commits from reaching the repository

**Installation**:
```bash
# Option 1: Symlink (recommended - stays updated)
ln -sf ../../scripts/pre-commit-build-check.sh .git/hooks/pre-commit

# Option 2: Copy
cp scripts/pre-commit-build-check.sh .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
```

**What it does**:
- ✓ Scans staged files for unescaped apostrophes in quotes
- ✓ Checks for conflicting metadata routes (public/ vs app/)
- ✓ Runs full Next.js build before commit
- ✓ Provides helpful error messages and fix suggestions
- ✓ Blocks commit if build fails

**Bypass** (emergencies only):
```bash
git commit --no-verify
```

### 2. Auto-Fix Workflow (CI/CD)

**Location**: `.github/workflows/auto-fix-build.yml`

**Triggers**:
- Every push to `claude/**`, `main`, or `dev` branches
- Every PR opened, synchronized, or reopened

**Autonomous Fixes**:

#### Fix #1: Apostrophe Escaping
- **Detects**: `Expected ','` or `unescaped` in build output
- **Action**: Converts single-quoted strings with apostrophes to double quotes
- **Example**:
  ```typescript
  // Before (fails)
  description: 'Spanish Trail's guard-gated community'

  // After (fixed automatically)
  description: "Spanish Trail's guard-gated community"
  ```

#### Fix #2: Conflicting Metadata Routes
- **Detects**: `conflicting public` or `conflicts with app/robots`
- **Action**: Removes `public/robots.txt` or `public/sitemap.xml` in favor of app routes
- **Rationale**: Next.js 13+ metadata routes take precedence

#### Fix #3: Metadata Route Analysis
- **Detects**: `metadata.*not found`
- **Action**: Analyzes configuration and logs findings
- **Status**: Extensible for future auto-fixes

**Workflow Steps**:
1. **Detect** - Initial build attempt captures errors
2. **Fix** - Apply pattern-based fixes for known issues
3. **Verify** - Rebuild to confirm fixes work
4. **Commit** - Auto-commit and push if successful
5. **Alert** - Comment on PR with results

**Permissions Required**:
- `contents: write` - To commit and push fixes
- `pull-requests: write` - To comment on PRs

### 3. Build Monitor (Continuous)

**Location**: `.github/workflows/build-monitor.yml`

**Triggers**:
- Every push and PR (same as auto-fix)
- Every 6 hours (scheduled cron)
- Manual dispatch via Actions UI

**Monitoring Features**:
- ✓ Tracks build duration and performance
- ✓ Counts generated pages
- ✓ Analyzes error patterns
- ✓ Creates GitHub issues for scheduled failures
- ✓ Prevents duplicate alerts
- ✓ Archives build logs as artifacts

**Alert Mechanism**:
- Creates issue with `automated-build-alert` label
- Includes error summary and first error details
- Links to failed workflow run
- Only creates one issue per failure (prevents spam)

## Common Issues Detected & Fixed

| Issue | Detection | Auto-Fix | Manual Fix |
|-------|-----------|----------|------------|
| Unescaped apostrophes | `Expected ','` in build | ✅ Convert to double quotes | Use `"` or `\'` |
| robots.txt conflict | `conflicts with app/robots` | ✅ Remove public/robots.txt | Delete one file |
| sitemap.xml conflict | `conflicts with app/sitemap` | ✅ Remove public/sitemap.xml | Delete one file |
| TypeScript errors | `Type error` in build | ❌ Manual | Fix type issues |
| Missing modules | `Cannot find module` | ❌ Manual | `npm install` |

## Usage Examples

### Developer Workflow

1. **Make changes** to code
2. **Commit** - pre-commit hook validates locally
3. **Push** - auto-fix workflow runs in CI
4. **Review PR** - bot comments with any fixes applied
5. **Merge** - only when build passes

### Handling Build Failures

**Scenario 1: Local commit blocked**
```bash
$ git commit -m "update page"
🔍 Running pre-commit build check...
❌ Build failed! Run 'npm run build' to see details.

# Fix the issue, then commit again
$ npm run build  # See the error
$ # Make your fix
$ git add .
$ git commit -m "update page"
✅ Pre-commit checks passed!
```

**Scenario 2: Auto-fixed in CI**
```
1. You push code with a quote escaping issue
2. CI detects the error during build
3. CI applies the fix automatically
4. CI commits and pushes the fix
5. PR shows comment: "✅ Build Issues Auto-Fixed"
```

**Scenario 3: Scheduled monitor alert**
```
1. Cron job runs build every 6 hours
2. Build fails (e.g., dependency issue)
3. Workflow creates GitHub issue
4. Team is notified via issue
5. Manual investigation required
```

## Configuration

### Adjust Auto-Fix Patterns

Edit `.github/workflows/auto-fix-build.yml`:

```yaml
# Add new fix pattern
if grep -q "your-error-pattern" build_output.txt; then
  echo "🔧 Detected your custom issue"
  # Your fix logic here
  FIXED=true
  FIXES_APPLIED="${FIXES_APPLIED}\n- Fixed custom issue"
fi
```

### Adjust Monitor Schedule

Edit `.github/workflows/build-monitor.yml`:

```yaml
schedule:
  # Change from every 6 hours to every 12 hours
  - cron: '0 */12 * * *'
```

### Disable Pre-Commit Locally

```bash
# Temporary bypass
git commit --no-verify

# Permanent disable
rm .git/hooks/pre-commit
```

## Metrics & Observability

### Build Artifacts

Every workflow run uploads:
- `build-logs` - Full build output (retained 7 days)
- `build-output-<run-id>` - Build output + .next/ (retained 3 days)

**Access**: GitHub Actions → Workflow run → Artifacts

### Success Metrics

The monitor tracks:
- Build duration (seconds)
- Pages generated vs total
- Success/failure rate
- Auto-fix success rate

**View**: Check workflow run logs for metrics

### Alert Labels

Issues created by automation:
- `automated-build-alert` - Created by monitor
- `bug` - Indicates build failure

**Query**: Filter issues by these labels

## Maintenance

### Update Fix Patterns

As new common issues emerge:

1. Identify error pattern in build logs
2. Add detection logic to auto-fix workflow
3. Add fix script (Python/Bash)
4. Test on a branch
5. Update this documentation

### Review Auto-Fixed Commits

Periodically review auto-fixed commits:

```bash
git log --grep="auto-fix build issues" --oneline
```

Verify fixes are correct and refine patterns if needed.

## Troubleshooting

### Pre-commit hook not running

```bash
# Check if installed
ls -la .git/hooks/pre-commit

# Reinstall
ln -sf ../../scripts/pre-commit-build-check.sh .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
```

### Auto-fix not committing

**Check permissions**: Workflow needs `contents: write`

```yaml
permissions:
  contents: write
  pull-requests: write
```

**Check branch protection**: Auto-fix commits must be allowed

### Monitor creating duplicate issues

**Check label filtering**: Workflow checks for `automated-build-alert` label

```bash
# View open automation issues
gh issue list --label automated-build-alert --state open
```

## Future Enhancements

Potential additions to the automation system:

- [ ] Auto-fix TypeScript type errors (via type inference)
- [ ] Auto-update dependencies (Dependabot-style)
- [ ] Performance regression detection
- [ ] Accessibility issue detection
- [ ] SEO validation (missing metadata)
- [ ] Image optimization
- [ ] Bundle size monitoring
- [ ] Lighthouse CI integration

## Benefits

✅ **Prevents broken builds** from reaching main  
✅ **Saves developer time** - fixes applied automatically  
✅ **Consistent code quality** - enforced patterns  
✅ **Fast feedback loop** - issues caught immediately  
✅ **Self-healing** - common problems resolve themselves  
✅ **Audit trail** - all fixes are committed and logged  

## Related Documentation

- [SEO/GEO/AEO Optimizations](./SEO_GEO_AEO_OPTIMIZATIONS.md)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Next.js Metadata Routes](https://nextjs.org/docs/app/api-reference/file-conventions/metadata)

---

**Last Updated**: 2026-08-11  
**Maintained By**: Automation System (with human oversight)

🤖 _This automation system is self-documenting and self-improving._
