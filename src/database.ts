const USER_INFO: Liveblocks["UserMeta"][] = [
  {
    id: "alex.riley@example.com",
    info: {
      name: "Alex Riley",
      color: "#D583F0",
      avatar: "https://liveblocks.io/avatars/avatar-1.png",
    },
  },
  {
    id: "casey.taylor@example.com",
    info: {
      name: "Casey Taylor",
      color: "#F08385",
      avatar: "https://liveblocks.io/avatars/avatar-2.png",
    },
  },
  {
    id: "taylor.jordan@example.com",
    info: {
      name: "Taylor Jordan",
      color: "#F0D885",
      avatar: "https://liveblocks.io/avatars/avatar-3.png",
    },
  },
  {
    id: "sasha.morgan@example.com",
    info: {
      name: "Sasha Morgan",
      color: "#85EED6",
      avatar: "https://liveblocks.io/avatars/avatar-4.png",
    },
  },
  {
    id: "jaden.henley@example.com",
    info: {
      name: "Jaden Henley",
      color: "#85BBF0",
      avatar: "https://liveblocks.io/avatars/avatar-5.png",
    },
  },
  {
    id: "rowan.sage@example.com",
    info: {
      name: "Rowan Sage",
      color: "#8594F0",
      avatar: "https://liveblocks.io/avatars/avatar-6.png",
    },
  },
  {
    id: "skyler.lee@example.com",
    info: {
      name: "Skyler Lee",
      color: "#85DBF0",
      avatar: "https://liveblocks.io/avatars/avatar-7.png",
    },
  },
  {
    id: "quinn.bennett@example.com",
    info: {
      name: "Quinn Bennett",
      color: "#87EE85",
      avatar: "https://liveblocks.io/avatars/avatar-8.png",
    },
  },
];

export function getRandomUser() {
  return USER_INFO[Math.floor(Math.random() * 10) % USER_INFO.length];
}

export function getUser(id: string) {
  return USER_INFO.find((u) => u.id === id) || null;
}

export function getUsers() {
  return USER_INFO;
}
