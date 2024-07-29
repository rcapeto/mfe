export const remoteEntries = {
   mfe1: {
      url: 'http://localhost:3001/assets/remoteEntry.js',
      remoteName: {
         Card: './Card',
         Routes: './Routes',
         Router: './Router',
      },
      webComponents: {
         Card: 'mfe1-card',
         Router: 'mfe1-router',
      },
   },
   mfe2: {
      url: 'http://localhost:5001/remoteEntry.js',
      remoteName: {
         CardComponent: './CardComponent',
         AppChild: './AppChild',
      },
      webComponents: {
         Card: 'mfe1-card',
         Router: 'mfe1-router',
      },
   },
   miniShell: {
      url: 'http://localhost:5002/remoteEntry.js',
      remoteName: {
         CardComponent: './CardComponent',
      },
   },
   miniShellReact: {
      url: 'http://localhost:3002/assets/remoteEntry.js',
      remoteName: {
         Card: './Card',
      },
      webComponents: {
         Card: 'mini-shell-react',
      },
   },
}