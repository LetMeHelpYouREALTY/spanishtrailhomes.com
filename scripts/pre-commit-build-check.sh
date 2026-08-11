#!/bin/bash
# Pre-commit hook for build validation
# Install: ln -sf ../../scripts/pre-commit-build-check.sh .git/hooks/pre-commit

set -e

echo "🔍 Running pre-commit build check..."

# Check for common issues before building
ISSUES_FOUND=false

# Check 1: Look for unescaped apostrophes in single-quoted strings
echo "Checking for quote escaping issues..."
if git diff --cached --name-only | grep -E '\.(tsx?|jsx?)$' | xargs grep -n "'[^']*[^\\]'[^']*'" 2>/dev/null | grep -v "\\\\'" ; then
    echo "⚠️  Warning: Potential unescaped apostrophes in single-quoted strings found."
    echo "   Consider using double quotes for strings containing apostrophes."
    ISSUES_FOUND=true
fi

# Check 2: Ensure no conflicting metadata routes
echo "Checking for metadata route conflicts..."
if [ -f "public/robots.txt" ] && [ -f "app/robots.ts" ]; then
    echo "❌ Error: Conflicting robots.txt files detected!"
    echo "   Remove either public/robots.txt or app/robots.ts"
    exit 1
fi

if [ -f "public/sitemap.xml" ] && [ -f "app/sitemap.ts" ]; then
    echo "❌ Error: Conflicting sitemap files detected!"
    echo "   Remove either public/sitemap.xml or app/sitemap.ts"
    exit 1
fi

# Check 3: Run the build
echo "Running Next.js build..."
if ! npm run build > /dev/null 2>&1; then
    echo "❌ Build failed! Run 'npm run build' to see details."
    echo ""
    echo "Tip: The build must pass before committing."
    echo "Common fixes:"
    echo "  - Check for quote escaping in .tsx files"
    echo "  - Verify no conflicting metadata routes (public/ vs app/)"
    echo "  - Ensure all imports are correct"
    exit 1
fi

if [ "$ISSUES_FOUND" = true ]; then
    echo ""
    echo "⚠️  Build passed but warnings were found."
    echo "   Consider addressing them before committing."
    echo ""
    read -p "Continue with commit? (y/N) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

echo "✅ Pre-commit checks passed!"
exit 0
