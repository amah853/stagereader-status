        // ========================================
        // 🔧 CONFIGURATION - EDIT EVERYTHING HERE
        // ========================================

        const STATUS_CONFIG = {
            // Status definitions
            statusTypes: {
                operational: { name: 'Operational', color: '#22c55e', priority: 1 },
                degraded: { name: 'Degraded', color: '#f59e0b', priority: 2 },
                partial: { name: 'Partial Outage', color: '#ef4444', priority: 3 },
                major: { name: 'Major Outage', color: '#dc2626', priority: 4 },
                critical: { name: 'Critical Failure', color: '#991b1b', priority: 5 }
            },

            // Overall status messages
            overallMessages: {
                operational: {
                    title: 'All Systems Operational',
                    description: 'All services are running smoothly with no reported issues'
                },
                degraded: {
                    title: 'Some Systems Experiencing Issues',
                    description: 'Some services may be slower than usual, but core functionality remains available'
                },
                partial: {
                    title: 'Partial Service Disruption',
                    description: 'Some services are experiencing significant issues that may affect functionality'
                },
                major: {
                    title: 'Major Service Disruption',
                    description: 'Multiple services are experiencing major issues affecting most users'
                },
                critical: {
                    title: 'Critical System Failure',
                    description: 'Critical services are down and we are working to restore them immediately'
                }
            },


          // Statuses: operational, degraded, partial, major, critical
          // Stages: investigating, solving, resolved
            
          
          services: [
    {
        name: 'Core App Availability',
        icon: '🌐',
        description: 'Main application and user interface',
        status: 'operational',
        incident: {
            title: 'No current incidents',
            description: '',
            stages: ['resolved'],
            startTime: ''
        }
    },
    {
        name: 'User Authentication (Google/Firebase)',
        icon: '🔐',
        description: 'User login, registration, and session management',
        status: 'operational',
        incident: {
            title: 'No current incidents',
            description: '',
            stages: ['resolved'],
            startTime: ''
        }
    },
    {
        name: 'Account Management (Profile, Email, Password)',
        icon: '👤',
        description: 'User profile and account settings',
        status: 'operational',
        incident: {
            title: 'No current incidents',
            description: '',
            stages: ['resolved'],
            startTime: ''
        }
    },
    {
        name: 'Password Reset',
        icon: '🔄',
        description: 'Password recovery and reset',
        status: 'operational',
        incident: {
            title: 'No current incidents',
            description: '',
            stages: ['resolved'],
            startTime: ''
        }
    },
    {
        name: 'Account Deletion',
        icon: '❌',
        description: 'Account removal process',
        status: 'operational',
        incident: {
            title: 'No current incidents',
            description: '',
            stages: ['resolved'],
            startTime: ''
        }
    },
    {
        name: 'Session Persistence / Auth State',
        icon: '🔄',
        description: 'Maintaining user sessions and auth state',
        status: 'operational',
        incident: {
            title: 'No current incidents',
            description: '',
            stages: ['resolved'],
            startTime: ''
        }
    },
    {
        name: 'Version Checker / Auto-Update',
        icon: '⚙️',
        description: 'Version checking and app auto-updates',
        status: 'operational',
        incident: {
            title: 'No current incidents',
            description: '',
            stages: ['resolved'],
            startTime: ''
        }
    },
    {
        name: 'Premium & Billing',
        icon: '💳',
        description: 'Premium subscription management and billing',
        status: 'operational',
        incident: {
            title: 'No current incidents',
            description: '',
            stages: ['resolved'],
            startTime: ''
        }
    },
    {
        name: 'Premium Status Sync',
        icon: '📡',
        description: 'Synchronizing premium status with accounts',
        status: 'operational',
        incident: {
            title: 'No current incidents',
            description: '',
            stages: ['resolved'],
            startTime: ''
        }
    },
    {
        name: 'Enterprise Management Portal',
        icon: '🏢',
        description: 'Management of enterprise accounts and configuration',
        status: 'operational',
        incident: {
            title: 'No current incidents',
            description: '',
            stages: ['resolved'],
            startTime: ''
        }
    },
    {
        name: 'BETA Testers Portal',
        icon: '🧪',
        description: 'Staging ground for experimental tools. Access is gated and may experience occasional instability.',
        status: 'operational',
        incident: {
            title: 'No current incidents',
            description: '',
            stages: ['resolved'],
            startTime: ''
        }
    },              
    {
        name: 'Google Drive Integration (Import/Export)',
        icon: '🟢',
        description: 'Google Drive import and export functionality',
        status: 'operational',
        incident: {
            title: 'No current incidents',
            description: '',
            stages: ['resolved'],
            startTime: ''
        }
    },
    {
        name: 'Accessibility Features',
        icon: '♿',
        description: 'Accessibility and assistive technology support',
        status: 'operational',
        incident: {
            title: 'No current incidents',
            description: '',
            stages: ['resolved'],
            startTime: ''
        }
    },
    {
        name: 'Theme/Style Asset Delivery',
        icon: '🎭',
        description: 'Theme, style, images, and more (all in /assets) delivery',
        status: 'operational',
        incident: {
            title: 'No current incidents',
            description: '',
            stages: ['resolved'],
            startTime: ''
        }
    },
    {
        name: 'Service Worker / Offline Support',
        icon: '🛠️',
        description: 'Offline support via service workers',
        status: 'operational',
        incident: {
            title: 'No current incidents',
            description: '',
            stages: ['resolved'],
            startTime: ''
        }
    }
],

            // Performance metrics
            metrics: [
                { label: 'Uptime (30 days)', value: '100%' },
                { label: 'Avg Response Time', value: '245ms' },
                { label: 'Active Incidents', value: '0' },
                { label: 'Next Scheduled Update', value: 'July 15th' }
            ],

            // Recent history
            /*
            history: [
                {
                    date: 'Jan 15, 2024',
                    status: 'degraded',
                    description: 'Script Library experiencing slower response times - investigating'
                },
                {
                    date: 'Jan 12, 2024',
                    status: 'operational',
                    description: 'Scheduled maintenance completed successfully'
                },
                {
                    date: 'Jan 10, 2024',
                    status: 'operational',
                    description: 'Brief authentication service interruption - resolved in 15 minutes'
                },
                {
                    date: 'Jan 8, 2024',
                    status: 'operational',
                    description: 'Database optimization completed, improved performance by 25%'
                }
                ]
            */
        };
    
        // If you want to export the config for use in other files, uncomment the following line:
        // module.exports = STATUS_CONFIG;