import { devices } from '@playwright/test';

export default {
    webServer: {
        command: 'npm run dev',
        port: 5173,
        reuseExistingServer: !process.env.CI,
    },
    projects: [
        {
            name: 'Desktop Chrome',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'iPhone 11',
            use: { ...devices['iPhone 11'] },
        },
        {
            name: 'Pixel 5',
            use: { ...devices['Pixel 5'] },
        }

    ],
    use: {
        baseUrl: 'http://localhost:5173',
        screenshot: 'only-on-failure',
        trace: 'on-first-retry',
    }
}