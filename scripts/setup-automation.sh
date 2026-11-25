#!/bin/bash
# Setup script for build automation system
# Run this once to install local automation components

set -e

echo "🤖 Setting up build automation system..."
echo ""

# Check if we're in a git repository
if [ ! -d .git ]; then
    echo "❌ Error: Not in a git repository"
    echo "   Run this script from the repository root"
    exit 1
fi

# Install pre-commit hook
echo "📋 Installing pre-commit hook..."
if [ -f .git/hooks/pre-commit ]; then
    echo "   ⚠️  Pre-commit hook already exists"
    read -p "   Overwrite? (y/N) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "   Skipping pre-commit hook installation"
    else
        ln -sf ../../scripts/pre-commit-build-check.sh .git/hooks/pre-commit
        echo "   ✅ Pre-commit hook installed (symlink)"
    fi
else
    ln -sf ../../scripts/pre-commit-build-check.sh .git/hooks/pre-commit
    echo "   ✅ Pre-commit hook installed (symlink)"
fi

# Verify hook is executable
if [ ! -x scripts/pre-commit-build-check.sh ]; then
    echo "   Making pre-commit script executable..."
    chmod +x scripts/pre-commit-build-check.sh
fi

# Check GitHub Actions workflows
echo ""
echo "📋 Checking GitHub Actions workflows..."
if [ -f .github/workflows/auto-fix-build.yml ]; then
    echo "   ✅ Auto-fix workflow found"
else
    echo "   ❌ Auto-fix workflow missing"
    echo "      Expected: .github/workflows/auto-fix-build.yml"
fi

if [ -f .github/workflows/build-monitor.yml ]; then
    echo "   ✅ Build monitor workflow found"
else
    echo "   ❌ Build monitor workflow missing"
    echo "      Expected: .github/workflows/build-monitor.yml"
fi

# Test pre-commit hook
echo ""
echo "🧪 Testing pre-commit hook..."
if .git/hooks/pre-commit; then
    echo "   ✅ Pre-commit hook test passed"
else
    echo "   ⚠️  Pre-commit hook test failed (may be expected if build fails)"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ Automation setup complete!"
echo ""
echo "What's enabled:"
echo "  • Pre-commit build validation (local)"
echo "  • Auto-fix workflow (CI - runs on push/PR)"
echo "  • Build monitor (CI - runs every 6 hours)"
echo ""
echo "Next steps:"
echo "  1. Make a commit to test the pre-commit hook"
echo "  2. Push to GitHub to trigger CI workflows"
echo "  3. Review AUTOMATION.md for full documentation"
echo ""
echo "To bypass pre-commit (emergencies only):"
echo "  git commit --no-verify"
echo ""
echo "To disable pre-commit permanently:"
echo "  rm .git/hooks/pre-commit"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
