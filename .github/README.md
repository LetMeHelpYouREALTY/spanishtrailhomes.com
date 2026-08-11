# GitHub Actions Workflows

This directory contains automated workflows for build validation, auto-fixing, and monitoring.

## Workflows

### 🔧 Auto-Fix Build Issues (`auto-fix-build.yml`)

**Purpose**: Automatically detect and fix common build issues

**Triggers**:
- Every push to `claude/**`, `main`, or `dev` branches
- Every PR opened, synchronized, or reopened

**What it fixes**:
1. **Apostrophe escaping** - Converts `'text's'` to `"text's"`
2. **Metadata route conflicts** - Removes conflicting `public/robots.txt` or `public/sitemap.xml`
3. **Other issues** - Extensible for future patterns

**Workflow**:
```
Push/PR → Detect build error → Apply fix → Verify → Commit → Comment on PR
```

**Permissions needed**:
- `contents: write` - To commit fixes
- `pull-requests: write` - To comment on PRs

### 📊 Build Monitor (`build-monitor.yml`)

**Purpose**: Continuous build health monitoring and alerting

**Triggers**:
- Every push and PR
- Every 6 hours (scheduled cron: `0 */6 * * *`)
- Manual dispatch via Actions UI

**What it does**:
- Monitors build health continuously
- Tracks build duration and page generation
- Analyzes error patterns
- Creates GitHub issues for scheduled failures (with `automated-build-alert` label)
- Archives build logs as artifacts (3-7 day retention)

**Metrics tracked**:
- Build duration
- Pages generated vs total
- Error patterns and types

## Setup

### For Developers

Install the local pre-commit hook:
```bash
./scripts/setup-automation.sh
```

This installs a pre-commit hook that validates builds before you commit.

### For CI/CD

These workflows run automatically once they're in the repository. No additional setup needed.

**Required secrets**: None (uses `GITHUB_TOKEN`)

**Required permissions**: Set in workflow files (`contents: write`, `pull-requests: write`)

## Usage

### Normal Development Flow

1. Make changes locally
2. Commit (pre-commit hook validates)
3. Push to your branch
4. Auto-fix workflow runs in CI
5. If issues found and fixed, bot commits and comments on PR
6. Review and merge when green

### When Auto-Fix Runs

You'll see a commit like:
```
fix: auto-fix build issues

Automated fixes applied:
- Fixed apostrophe escaping in single-quoted strings

🤖 Auto-fixed by GitHub Actions
```

And a PR comment:
```
✅ Build Issues Auto-Fixed

The following issues were automatically detected and fixed:
- Fixed apostrophe escaping in single-quoted strings

The build now passes successfully! The fixes have been committed and pushed.
```

### When Monitor Creates an Issue

Every 6 hours, if the build fails:
```
🚨 Scheduled Build Monitor Alert

The automated build monitor detected a build failure.

Error Summary:
- Quote escaping error detected in TypeScript files

First Error:
Expected ',', got 's'
```

## Troubleshooting

### Workflow not running

Check:
1. Workflow file is in `.github/workflows/`
2. Branch matches trigger patterns
3. Workflow is enabled in repository settings

### Auto-fix not committing

Check:
1. `GITHUB_TOKEN` has write permissions
2. Branch protection allows commits from Actions
3. No merge conflicts

### Monitor creating duplicate issues

Check:
- Only one issue with `automated-build-alert` label should exist
- Close old automation issues manually if duplicates appear

## Extending

### Add a new auto-fix pattern

Edit `auto-fix-build.yml`:

```yaml
# Add after existing fixes
if grep -q "your-error-pattern" build_output.txt; then
  echo "🔧 Detected your issue"
  
  # Your fix logic here
  
  FIXED=true
  FIXES_APPLIED="${FIXES_APPLIED}\n- Fixed your issue"
fi
```

### Change monitoring frequency

Edit `build-monitor.yml`:

```yaml
schedule:
  # Every 12 hours instead of 6
  - cron: '0 */12 * * *'
```

## Best Practices

✅ **Do**:
- Let auto-fix handle common issues
- Review auto-fix commits before merging
- Keep workflows updated with new patterns
- Monitor GitHub Actions usage/costs

❌ **Don't**:
- Bypass pre-commit hooks routinely (`--no-verify`)
- Ignore automation alerts
- Disable workflows without team consensus

## Related Documentation

- [AUTOMATION.md](../AUTOMATION.md) - Full automation system documentation
- [Pre-commit hook](../scripts/pre-commit-build-check.sh) - Local validation
- [Setup script](../scripts/setup-automation.sh) - Installation helper

## Metrics

View workflow results:
- **Actions tab** - See all workflow runs
- **Artifacts** - Download build logs
- **Issues** - Filter by `automated-build-alert` label

---

🤖 _Automated build quality assurance_
