import Image from "next/image";
import {
  AiOutlineCloseCircle,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";
import { BiMask, BiDialpad, BiToggleLeft, BiSearchAlt } from "react-icons/bi";
import {
  GoTypography,
  GoAlert,
  GoCheckbox,
  GoKebabHorizontal,
  GoMultiSelect,
} from "react-icons/go";
import { RxButton, RxAvatar, RxDropdownMenu } from "react-icons/rx";
import { RiLayoutBottom2Line } from "react-icons/ri";
import { CgProfile, CgLoadbar, CgScrollV } from "react-icons/cg";
import {
  BsCursorText,
  BsCalendarDate,
  BsSegmentedNav,
  BsPalette,
  BsUpload,
  BsBarChartSteps,
  BsTelephonePlus,
  BsTable,
  BsCardHeading,
  BsCalendarRange,
} from "react-icons/bs";
import { TbTooltip, TbBoxMultiple, TbLayoutSidebar } from "react-icons/tb";
import { GrToast } from "react-icons/gr";
import { IoMdTime } from "react-icons/io";
import {
  TfiLayoutAccordionMerged,
  TfiLayoutTabWindow,
  TfiLineDouble,
} from "react-icons/tfi";
import { ImPageBreak, ImSpinner9 } from "react-icons/im";
import { SiProgress } from "react-icons/si";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdTextFields,
  MdPassword,
  MdOutlineStarRate,
  MdMenu,
  MdClose,
} from "react-icons/md";
import { LiaIdBadgeSolid, LiaCommentDotsSolid } from "react-icons/lia";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const sidebarItems = [
  {
    name: "Accordion",
    href: "/",
    icon: TfiLayoutAccordionMerged,
  },
  {
    name: "Alert",
    href: "/Alert",
    icon: GoAlert,
  },
  {
    name: "AppBar",
    href: "/AppBar",
    icon: TbLayoutSidebar,
  },
  {
    name: "Avatar",
    href: "/Avatar",
    icon: RxAvatar,
  },
  {
    name: "Badge",
    href: "/Badge",
    icon: LiaIdBadgeSolid,
  },
  {
    name: "Breadcrumb",
    href: "/Breadcrumb",
    icon: SiProgress,
  },
  {
    name: "Bottom Navigation",
    href: "/BottomNavigation",
    icon: RiLayoutBottom2Line,
  },
  {
    name: "Button",
    href: "/Button",
    icon: RxButton,
  },
  {
    name: "Card",
    href: "/Card",
    icon: BsCardHeading,
  },
  {
    name: "Checkbox",
    href: "/Checkbox",
    icon: GoCheckbox,
  },

  {
    name: "Close Button",
    href: "/Closebutton",
    icon: AiOutlineCloseCircle,
  },
  {
    name: "Color Picker",
    href: "/Colorpicker",
    icon: BsPalette,
  },
  {
    name: "Comment Sent Box",
    href: "/CommentSentBox",
    icon: LiaCommentDotsSolid,
  },
  {
    name: "Company List",
    href: "/CompanyList",
    icon: GoMultiSelect,
  },
  {
    name: "Country Select Dropdown",
    href: "/CountrySelect",
    icon: RxDropdownMenu,
  },
  {
    name: "DataTable",
    href: "/Datatable",
    icon: BsTable,
  },
  {
    name: "Date Picker",
    href: "/Datepicker",
    icon: BsCalendarDate,
  },
  {
    name: "Datepicker Range",
    href: "/DatepickerRange",
    icon: BsCalendarRange,
  },
  {
    name: "Dropdown List",
    href: "/DropdownList",
    icon: GoMultiSelect,
  },
  {
    name: "File Uploader",
    href: "/Fileuploader",
    icon: BsUpload,
  },
  {
    name: "Input Mask",
    href: "/Inputmask",
    icon: BiMask,
  },
  {
    name: "Loader",
    href: "/Loader",
    icon: AiOutlineLoading3Quarters,
  },
  {
    name: "Menu Icon",
    href: "/MenuIcon",
    icon: GoKebabHorizontal,
  },
  {
    name: "Modal",
    href: "/Modal",
    icon: TbBoxMultiple,
  },
  {
    name: "Navigation Bar",
    href: "/NavigationBar",
    icon: TfiLayoutTabWindow,
  },
  {
    name: "Pagination",
    href: "/Pagination",
    icon: ImPageBreak,
  },
  {
    name: "Password",
    href: "/Password",
    icon: MdPassword,
  },
  {
    name: "Profile",
    href: "/Profile",
    icon: CgProfile,
  },
  {
    name: "Progress Bar",
    href: "/Progressbar",
    icon: BsSegmentedNav,
  },
  {
    name: "Progress Bar Steps",
    href: "/Progressstep",
    icon: BsBarChartSteps,
  },
  {
    name: "Property Bar",
    href: "/PropertyBar",
    icon: CgLoadbar,
  },
  // {
  //   name: "Radio",
  //   href: "/Radio",
  //   icon: MdPassword,
  // },
  {
    name: "Range Slider",
    href: "/RangeSlider",
    icon: TfiLineDouble,
  },
  {
    name: "Rating",
    href: "/Rating",
    icon: MdOutlineStarRate,
  },
  {
    name: "Scrollspy",
    href: "/Scrollspy",
    icon: CgScrollV,
  },
  {
    name: "Search",
    href: "/Search",
    icon: BiSearchAlt,
  },
  {
    name: "Select Dropdown",
    href: "/Selectdropdown",
    icon: RxDropdownMenu,
  },
  {
    name: "Speed Dial",
    href: "/Speeddial",
    icon: BiDialpad,
  },
  {
    name: "Spinner",
    href: "/Spinner",
    icon: ImSpinner9,
  },
  {
    name: "Switch",
    href: "/Switch",
    icon: BiToggleLeft,
  },
  {
    name: "Tab Bar",
    href: "/Tab",
    icon: TfiLayoutTabWindow,
  },
  {
    name: "Table",
    href: "/Table",
    icon: BsTable,
  },
  {
    name: "Tel",
    href: "/Tel",
    icon: BsTelephonePlus,
  },
  {
    name: "Text area",
    href: "/Textarea",
    icon: BsCursorText,
  },
  {
    name: "Text Field",
    href: "/Textfield",
    icon: MdTextFields,
  },
  {
    name: "Time Picker",
    href: "/Timepicker",
    icon: IoMdTime,
  },
  {
    name: "Toast",
    href: "/Toast",
    icon: GrToast,
  },
  {
    name: "Tooltip",
    href: "/Tooltip",
    icon: TbTooltip,
  },
  {
    name: "Typography",
    href: "/Typography",
    icon: GoTypography,
  },
];

const Sidebar = () => {
  const [isCollapsed, setCollapse] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const pathname = usePathname();

  const toggleSidebarCollapse = () => {
    setCollapse((prevState) => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 450) {
        setIsSmallScreen(true);
        setCollapse(true); // Auto-collapse on small screens
      } else {
        setIsSmallScreen(false);
        setCollapse(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebarcollapse = () => {
    setCollapse((prevState) => !prevState);
  };

  return (
    <div className="sidebar__wrapper">
      {isSmallScreen ? (
        <>
          <button
            className={`btn absolute m-4 ${
              isCollapsed ? "left-0 top-0" : "left-[230px] top-3"
            }`}
            onClick={toggleSidebarCollapse}
          >
            {isCollapsed ? <MdMenu /> : <MdClose />}
          </button>
          <aside
            className={`sidebar ${
              isCollapsed && isSmallScreen ? "hidden" : "block"
            }`}
          >
            <div className="sidebar__top">
              <Image
                width={80}
                height={80}
                className="sidebar__logo"
                src="/logo.jpeg"
                alt="logo"
              />
              <p className="sidebar__logo-name">Tms Libraries</p>
            </div>
            <ul className="sidebar__list">
              {sidebarItems.map(({ name, href, icon: Icon }) => {
                return (
                  <li className="sidebar__item" key={name}>
                    <Link
                      className={`sidebar__link ${
                        pathname === href ? "sidebar__link--active" : ""
                      }`}
                      href={href}
                    >
                      <span className="sidebar__icon">
                        <Icon />
                      </span>
                      <span className="sidebar__name">{name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </aside>
        </>
      ) : (
        <>
          <button className="btn" onClick={toggleSidebarcollapse}>
            {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
          </button>
          <aside className="sidebar" data-collapse={isCollapsed}>
            <div className="sidebar__top">
              <Image
                width={80}
                height={80}
                className="sidebar__logo"
                src="/logo.jpeg"
                alt="logo"
              />
              <p className="sidebar__logo-name">Tms Libraries</p>
            </div>
            <ul className="sidebar__list">
              {sidebarItems.map(({ name, href, icon: Icon }) => {
                return (
                  <li className="sidebar__item" key={name}>
                    <Link
                      className={`sidebar__link ${
                        pathname === href ? "sidebar__link--active" : ""
                      }`}
                      href={href}
                    >
                      <span className="sidebar__icon">
                        <Icon />
                      </span>
                      <span className="sidebar__name">{name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </aside>
        </>
      )}
    </div>
  );
};

export default Sidebar;
