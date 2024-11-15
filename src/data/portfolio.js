// Icons from CORE UI https://coreui.io/icons/free/
export default [
    { title: "Naruto CCG Community App",
      description: "The Naruto CCG Community App is an Android and iOS application for players and collectors of the Naruto CCG Card game. \nThis application gives community members the ability to create virtual decks to plan out their future decks to play with other players and to keep a collection of the Naruto cards that they have collected. Users can message each other through a realtime chat to be able to trade cards with each other or to communitcate with other community members. \n\n The app is on the Apple App Store and the Android APK can be installed through the app website.  It has over 33,000 registered users and 500 weekly active users.",
      projectHref: "https://app.narutoccg.com",
      projectImage : "https://app.narutoccg.com/static/media/chat.370ad133.png",
      bkgImg:"#eeeeee",
      tech: [
        {
          "icon": "cib-node-js",
          "iconColor": "#689f62",
          "name": "Node.js",
        },
        {
          "icon": "cib-react",
          "iconColor": "#61dafb",
          "name": "React.js",
        },
        {
          "icon": "cib-react",
          "iconColor": "#61dafb",
          "name": "React Native",
        },
        {
          "icon": "cib-mongodb",
          "iconColor": "#449945",
          "name": "MongoDB",
        },
        {
          "icon": "cib-socket-io",
          "iconColor": "black",
          "name": "Socket.io",
        },
        {
          "icon": "cib-firebase",
          "iconColor": "#ffcb2b",
          "name": "Firebase",
        },
        {
          "icon": "cib-amazon-aws",
          "iconColor": "#ff9901",
          "name": "AWS EC2",
        },
      ],
      links: [
        {
          "name" : "Naruto CCG App Client Repository",
          "url" : "https://github.com/abel30567/NarutoAppClient",
          "icon" : "cib-github",
          "iconColor": "black",
        },
        {
          "name" : "Naruto CCG App RESTful API Repository",
          "url" : "https://github.com/abel30567/NarutoAppClient",
          "icon" : "cib-github",
          "iconColor": "black",
        },
        {
          "name" : "iOS App Installation",
          "url" : "https://apps.apple.com/us/app/card-collector-naruto-edition/id1460633152",
          "icon" : "cib-apple",
          "iconColor": "black",
        },
        {
          "name" : "Android App Installation",
          "url" : "https://app.narutoccg.com/android",
          "icon" : "cib-android-alt",
          "iconColor": "black",
        }
      ]
    },
    { title: "LocalJSCompress",
    description: "This is a small application I made that compresses images to get optimal image file size results while maintaining their image quality. I was able to reduce my image files by six times their original size. I created this application because I needed to optimize image sizes to render for customers on the Naruto CCG Application within 3 seconds of initial load. Thanks to this application it is easy to optimize image size when performing a batch job that requires images.",
    projectHref: "https://github.com/abel30567/localjscompress",
    projectImage : "https://miro.medium.com/max/2000/1*GhOvONPy1KOJWhZsTVu-rg.png",
    bkgImg:"#46483F",
    tech: [
      {
        "icon": "cib-node-js",
        "iconColor": "#689f62",
        "name": "Node.js",
      },
    ],
    links: [
      {
        "name" : "How I Compressed Images with Jimp and Imagemin with Node.js",
        "url" : "https://medium.com/@claudio_69833/how-i-compressed-images-with-jimp-and-imagemin-with-node-js-ff863a4c46ac?sk=c323e5ce96e264c662251b8012451940",
        "icon" : "cib-medium",
        "iconColor": "black",
      },
      {
        "name" : "LocalJSCompress Repo",
        "url" : "https://github.com/abel30567/localjscompress",
        "icon" : "cib-github",
        "iconColor": "black",
      },
    ]
  },
    { title: "Bitcore-Insight",
    description: "This is a forked API from Bitpay's Bitcore-Explorers. This API helps Javascript developers get started on using Bitcoin's test network to understand how to make transactions and how to look up the balance of a Bitcoin Address. \nIt is fairly challenging to make Bitcoin transactions which is why I created such a package that can be installed through npm. I also made some documentation on how to make Bitcoin transactions using Javascript.",
    projectHref: "https://www.npmjs.com/package/bitcore-insight",
    projectImage : "https://miro.medium.com/max/1400/1*reOY59DvwmugKVnSIm2JnQ.png",
    bkgImg:"#ff5a5c",
    tech: [
      {
        "icon": "cib-node-js",
        "iconColor": "#689f62",
        "name": "Node.js",
      },
      {
        "icon": "cib-react",
        "iconColor": "#61dafb",
        "name": "React.js",
      },
      {
        "icon": "cib-bitcoin",
        "iconColor": "#f7931a",
        "name": "Bitcoin",
      },
    ],
    links: [
      {
        "name" : "How to Create Bitcoin Transactions with Javascript",
        "url" : "https://medium.com/@claudio_69833/how-to-create-bitcoin-transactions-with-javascript-b3b43f53ca0c",
        "icon" : "cib-medium",
        "iconColor": "black",
      },
      {
        "name" : "bitcore-insight on npm",
        "url" : "https://www.npmjs.com/package/bitcore-insight",
        "icon" : "cib-npm",
        "iconColor": "black",
      },
      {
        "name" : "Sample Bitcoin Testnet Wallet using bitcore-insight",
        "url" : "https://github.com/abel30567/testnetBitcoinWallet",
        "icon" : "cib-github",
        "iconColor": "black",
      },
    ]
  },
    { title: "Dental Courier",
      description: "This is a sample React Native app that has a simple login screen and uses a phone's camera to take a photo to complete pick up and delivery orders for couriers dedicated to dental offices. Couriers are meant to scan packages with the barcodes on them as proof of pickup or delivery. The camera detects the barcode and then populates it in the confirmation screen.",
      projectHref: "https://github.com/abel30567/dentalCouriers",
      projectImage : "https://pbs.twimg.com/media/EaQV5gtWsAAmbsu?format=jpg",
      bkgImg:"#eeeeee",
      tech: [
        {
          "icon": "cib-react",
          "iconColor": "#61dafb",
          "name": "React Native",
        },
      ],
      links: [
        {
          "name" : "Dental Courier Repository",
          "url" : "https://github.com/abel30567/dentalCouriers",
          "icon" : "cib-github",
          "iconColor": "black",
        }
      ]
    },
    { title: "PhysPy: an interactive python tutorial for Intermediate Physics Lab",
    description: "This is an introduction to using Python for data analysis for the Physics labs at Florida International University. A friend and I got together and made these tutorials to make it easier on future physics labs courses to learn Python since we had no knowledge of coding prior to these labs. This shows students how to use matplotlib and numpy for data analysis based on specific physics labs.",
    projectHref: "https://github.com/abel30567/PhysPy",
    projectImage : "https://pbs.twimg.com/tweet_video_thumb/EaQd1r8XQAEmD7n.jpg",
    bkgImg:"#eeeeee",
    tech: [
      {
        "icon": "cib-python",
        "name": "Python",
        "iconColor": "black",
      },
      {
        "icon": "cib-anaconda",
        "name": "Anaconda",
        "iconColor": "#41ab29",
      },
      {
        "icon": "cib-jupyter",
        "name": "Jupyter Notebooks",
        "iconColor": "#ec7424",
      },
    ],
    links: [
      {
        "name" : "PhysPy Repository",
        "url" : "https://github.com/abel30567/PhysPy",
        "icon" : "cib-github",
        "iconColor": "black",
      }
    ]
  },
]

