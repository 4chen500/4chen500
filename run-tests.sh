#!/bin/bash

# 4chen500 E2E Test Runner
# Simple test runner for Web Vitals validation

echo "🚀 4chen500 E2E Test Runner"
echo "=========================="

# Check if Playwright is installed
if ! command -v npx &> /dev/null; then
    echo "❌ npx not found. Please install Node.js and npm."
    exit 1
fi

# Function to show usage
show_usage() {
    echo "Usage: $0 [OPTION]"
    echo ""
    echo "Options:"
    echo "  run         Run Web Vitals test (default)"
    echo "  headed      Run test with visible browser"
    echo "  install     Install Playwright browsers"
    echo "  report      Show test report"
    echo "  help        Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0              # Run test"
    echo "  $0 headed       # Run with visible browser"
}

# Function to install Playwright browsers
install_browsers() {
    echo "📦 Installing Playwright browsers..."
    npx playwright install
    echo "✅ Browsers installed successfully!"
}

# Function to show test report
show_report() {
    echo "📊 Opening test report..."
    npx playwright show-report
}

# Main script logic
case "${1:-run}" in
    "run")
        echo "🧪 Running Web Vitals test..."
        npx playwright test
        ;;
    "headed")
        echo "🧪 Running test with visible browser..."
        npx playwright test --headed
        ;;
    "install")
        install_browsers
        ;;
    "report")
        show_report
        ;;
    "help"|"-h"|"--help")
        show_usage
        ;;
    *)
        echo "❌ Unknown option: $1"
        echo ""
        show_usage
        exit 1
        ;;
esac

echo ""
echo "✅ Test run completed!"
