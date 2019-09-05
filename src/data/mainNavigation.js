const mainNavigation = [
  {
    dropdown: false,
    title: "Dashboard",
    icon: {
      name: "FaThList"
    },
    href: "/dashboard"
  },
  {
    dropdown: false,
    title: "Apps",
    icon: {
      name: "FaTh"
    },
    href: "/apps"
  },
  {
    dropdown: true,
    title: "components",
    icon: {
      name: "FaMagnet"
    },
    items: [
      {
        name: "Buttons",
        href: "/components/0",
      },
      {
        name: "Cards",
        href: "/components/1",
      },
      {
        name: "Stats",
        href: "#",
      },
      {
        name: "Popups",
        href: "#",
      },
    ],
  },
  {
    dropdown: false,
    title: "Icons",
    icon: {
      name: "FaSun"
    },
    href: "/icons"
  },
  {
    dropdown: true,
    title: "Forms",
    icon: {
      name: "FaWpforms"
    },
    items: [
      {
        name: "Form Layouts",
        href: "/forms/0",
      },
      {
        name: "Form Inputs",
        href: "/forms/1",
      },
      {
        name: "Form Controls",
        href: "/forms/2",
      },
    ],
  },
  {
    dropdown: false,
    title: "Tables",
    icon: {
      name: "FaTable"
    },
    href: "/table"
  },
  {
    dropdown: true,
    title: "Pages",
    icon: {
      name: "FaPagelines",
    }, 
    items: [
      {
        name: "Listing",
        href: "/pages/0",
      },
    ],
  },
  {
    dropdown: false,
    title: "Calender",
    icon: {
      name: "FaRegCalendarAlt"
    },
    href: "#"
  },
  {
    dropdown: false,
    title: "Maps",
    icon: {
      name: "FaMap"
    },
    href: "/apps"
  },
  {
    dropdown: false,
    title: "Menus",
    icon: {
      name: "FaTree"
    },
    href: "/menus"
  },
]

export default mainNavigation;
