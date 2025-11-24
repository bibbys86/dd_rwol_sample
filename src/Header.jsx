import React, { useEffect, useRef, useState } from "react";
import { useLocation } from 'react-router-dom';
import "./index.css";
import dd_logo_h_rgb from "./assets/dd_logo_h_rgb.png";
import ServiceHead from "./components/service/ServiceHead";
import ServiceItem from "./components/service/ServiceItem";
import menu from "./assets/menu.png";
import { NavLink } from "react-router-dom";
import { useBlogData } from './context/Context';
import { datadogRum } from '@datadog/browser-rum'; 

const Header = () => {
  // Service categories data
  const serviceCategories = [
    {
      title: "Mobile Development",
      icon: "ri-smartphone-fill",
      items: [
        { name: "iOS", icon: "ri-apple-fill" },
        { name: "Android", icon: "ri-android-fill" },
        { name: "Cross-Platform", icon: "ri-device-line" }
      ]
    },
    {
      title: "Web Development",
      icon: "ri-computer-line",
      items: [
        { name: "Fullstack JS", icon: "ri-javascript-fill" },
        { name: "Ecommerce&CMS", icon: "ri-shopping-cart-2-line" },
        { name: "Magneto", icon: "ri-magnet-line" },
        { name: "Wordpress", icon: "ri-wordpress-fill" },
        { name: "Progressive Web App", icon: "ri-global-line" }
      ]
    },
    {
      title: "Animation Services",
      icon: "ri-movie-2-line",
      items: [
        { name: "Animation Services", icon: "ri-film-line" },
        { name: "Explainer Video", icon: "ri-video-line" }
      ]
    },
    {
      title: "BlockChain",
      icon: "ri-links-line",
      items: [
        { name: "Smart Contract", icon: "ri-file-list-3-line" },
        { name: "dApps", icon: "ri-apps-2-line" },
        { name: "Crypto Currency", icon: "ri-coin-line" }
      ]
    },
    {
      title: "Digital Marketing",
      icon: "ri-megaphone-line",
      items: [
        { name: "App Store Optimization", icon: "ri-store-2-line" },
        { name: "Social Media Optimization", icon: "ri-share-line" },
        { name: "Search Engine Optimization", icon: "ri-search-2-line" }
      ]
    }
  ];

  // Process items data
  const processItems = [
    { name: "Fixed Cost Project", icon: "ri-price-tag-3-line" },
    { name: "Talent On Demand", icon: "ri-team-line" },
    { name: "Product Engineering", icon: "ri-tools-line" }
  ];

  const functionLinks = [
    { name: 'Error Page', path: '/error-test', icon: 'ri-error-warning-line' },
    { name: 'Slow Loading', path: '/slow-loading', icon: 'ri-timer-line' },
    { name: 'Diagnostics', path: '/diagnostics', icon: 'ri-dashboard-line' },
  ];

  let service = useRef();
  let items = useRef();
  let outerDiv = useRef();
  let [toggle, setToggle] = useState(false);
  const functionsMenuList = useRef();
  const [functionsMenuToggle, setFunctionsMenuToggle] = useState(false);
  
  let serviceClick = () => {
    let dupToggle = !toggle;
    setToggle(dupToggle);
    
    // Close process menu when service opens
    if (dupToggle && toggle2) {
      setToggle2(false);
      process.current.style.borderBottom = "2px solid transparent";
      proItems.current.style.height = "0px";
      proItems.current.style.paddingBottom = "0px";
    }

    if (dupToggle && functionsMenuToggle) {
      setFunctionsMenuToggle(false);
      if (functionsMenuList.current) {
        functionsMenuList.current.style.height = "0px";
      }
    }

    if (dupToggle) {
      service.current.style.borderBottom = "2px solid #FFB600";
      items.current.style.height = "fit-content";
      outerDiv.current.style.height = "70vh";
    } else {
      service.current.style.borderBottom = "2px solid transparent";
      items.current.style.height = "0px";
      outerDiv.current.style.height = "0px";
    }
  };

  let [toggle2, setToggle2] = useState(false);
  let process = useRef();
  let proItems = useRef();
  
  let processClick = () => {
    let dupli2Toggle = !toggle2;
    setToggle2(dupli2Toggle);
    
    // Close service menu when process opens
    if (dupli2Toggle && toggle) {
      setToggle(false);
      service.current.style.borderBottom = "2px solid transparent";
      items.current.style.height = "0px";
      outerDiv.current.style.height = "0px";
    }

    if (dupli2Toggle && functionsMenuToggle) {
      setFunctionsMenuToggle(false);
      if (functionsMenuList.current) {
        functionsMenuList.current.style.height = "0px";
      }
    }

    if (dupli2Toggle) {
      process.current.style.borderBottom = "2px solid #FFB600";
      proItems.current.style.height = "fit-content";
      proItems.current.style.paddingBottom = "5px";
    } else {
      process.current.style.borderBottom = "2px solid transparent";
      proItems.current.style.height = "0px";
      proItems.current.style.paddingBottom = "0px";
    }
  };

  let slideMenu = useRef();
  let [menuToggle, setMenuToggle] = useState(false);
  
  let menuClick = () => {
    let dupli3Toggle = !menuToggle;
    setMenuToggle(dupli3Toggle);
    if (dupli3Toggle) {
      slideMenu.current.style.height = "fit-content";
    } else {
      slideMenu.current.style.height = "0px";
      if (functionsMenuList.current) {
        functionsMenuList.current.style.height = "0px";
      }
      setFunctionsMenuToggle(false);
    }
  };

  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isProcessOpen, setIsProcessOpen] = useState(false);
  const [isFunctionsOpen, setIsFunctionsOpen] = useState(false);
  
  // Close process when service opens and vice versa
  const handleServiceToggle = () => {
    setIsServiceOpen(prev => {
      const next = !prev;
      if (next) {
        setIsProcessOpen(false);
        setIsFunctionsOpen(false);
      }
      return next;
    });
  };
  
  const handleProcessToggle = () => {
    setIsProcessOpen(prev => {
      const next = !prev;
      if (next) {
        setIsServiceOpen(false);
        setIsFunctionsOpen(false);
      }
      return next;
    });
  };

  const handleFunctionsToggle = () => {
    setIsFunctionsOpen(prev => {
      const next = !prev;
      if (next) {
        setIsServiceOpen(false);
        setIsProcessOpen(false);
      }
      return next;
    });
  };

  const blogList = useRef();
  const [blogToggle, setblogToggle] = useState(false);
  
  let blogClick = ()=>{
    let blog = !blogToggle;
    setblogToggle(blog)
    if (blog) {
      blogList.current.style.height = "fit-content";
    } else {
      blogList.current.style.height = "0px";
    }
  }

  let deskBlog = useRef();
  let [DeskBlogToggle, setDeskBlogToggle] = useState(false);
  
  let deskBlogHandler = ()=>{
    let deskToggle = !DeskBlogToggle;
    setDeskBlogToggle(deskToggle);
    if(deskToggle){
      deskBlog.current.style.display = "inline";
      deskBlog.current.style.height = "fit-content";
      deskBlog.current.style.border = '1px solid #a1a1aa';
    }
    else{
      deskBlog.current.style.display = "none";
      deskBlog.current.style.height = "0px";
      deskBlog.current.style.border = 'transparent';
    }
  }

  let mobBlogList = useRef();
  let [MobBlogToggle, setMobkBlogToggle] = useState(false);
  
  let mobBlogHandler = ()=>{
    let switchToggle = !MobBlogToggle;
    setMobkBlogToggle(switchToggle);
    if(switchToggle){
      mobBlogList.current.style.height = "fit-content";
    }
    else{
      mobBlogList.current.style.height = "0px";
    }
  }

  const mobileFunctionsHandler = () => {
    const toggled = !functionsMenuToggle;
    setFunctionsMenuToggle(toggled);
    if (functionsMenuList.current) {
      functionsMenuList.current.style.height = toggled ? "fit-content" : "0px";
    }
    if (toggled) {
      if (toggle) {
        setToggle(false);
        service.current.style.borderBottom = "2px solid transparent";
        items.current.style.height = "0px";
        outerDiv.current.style.height = "0px";
      }
      if (toggle2) {
        setToggle2(false);
        process.current.style.borderBottom = "2px solid transparent";
        proItems.current.style.height = "0px";
        proItems.current.style.paddingBottom = "0px";
      }
      if (MobBlogToggle) {
        setMobkBlogToggle(false);
        if (mobBlogList.current) {
          mobBlogList.current.style.height = "0px";
        }
      }
    }
  };

  const blogs = useBlogData();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem('dd_current_user');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed?.name || parsed?.plan) {
          setCurrentUser(parsed);
          return;
        }
      }
      // fallback
      setCurrentUser(null);
    } catch (error) {
      setCurrentUser(null);
    }
  }, [location.pathname]);

  const handleResetSession = () => {
    try {
      // Save user data before clearing
      const stored = sessionStorage.getItem('dd_current_user');
      
      // Stop current session
      datadogRum.stopSession();
      
      // Restore user data
      if (stored) {
        sessionStorage.setItem('dd_current_user', stored);
        const parsed = JSON.parse(stored);
        setCurrentUser(parsed);
      } else {
        setCurrentUser(null);
      }
      
      // Visual feedback
      alert('Session has been reset successfully!');
      
      // Optionally reload the page
      window.location.reload();
    } catch (error) {
      console.error('Failed to reset session:', error);
      alert('Failed to reset session. Please check console for details.');
    }
  };

  const handleToggleUserPlan = () => {
    try {
      if (!currentUser) {
        alert('No user data found. Please reload the page.');
        return;
      }

      // Check if already upgraded
      if (currentUser.hasPaid) {
        alert('Already upgraded to Premium plan!');
        return;
      }

      const user = { ...currentUser };
      
      // Upgrade to premium (only from standard to premium)
      user.plan = 'premium';
      user.hasPaid = true;

      // Update sessionStorage
      sessionStorage.setItem('dd_current_user', JSON.stringify(user));
      
      // Update Datadog RUM user properties
      datadogRum.setUserProperty('plan', user.plan);
      datadogRum.setUserProperty('hasPaid', user.hasPaid);
      
      // Update local state
      setCurrentUser(user);
      
      // Visual feedback
      alert(`Successfully upgraded to ${user.plan.toUpperCase()} plan!`);
    } catch (error) {
      console.error('Failed to upgrade plan:', error);
      alert('Failed to upgrade plan. Please check console for details.');
    }
  };
  
  return (
    <div className="sticky z-[999] top-0 bg-white w-[100vw] px-4 max-w-[1700px] mx-auto">
      <div className="sticky z-[999] top-0 bg-white">
        <div className="flex w-full px-4 items-center justify-between bg-white">
          <NavLink to='/'>
            <img
            className="logo w-[40vw] sm:w-[16rem] md:w-[12rem]"
            src={dd_logo_h_rgb}
            alt="Logo Image"
          />
          </NavLink>
          <i
            className={`menu text-[4.5vw] cursor-pointer sm:text-[1.8rem] lg:hidden transition-all duration-300 ${
              menuToggle ? 'ri-close-line' : 'ri-menu-line'
            }`}
            onClick={menuClick}
          ></i>
          
          <div className="hidden md:hidden lg:flex w-[75%] md:justify-between items-center">
            <ul className="flex items-center gap-4 lg:gap-5">
              <li
                onClick={handleServiceToggle}
                className="cursor-pointer text-[1.1rem] p-2 border-b-2 border-transparent hover:border-[#FFB600] hover:bg-[#FFF9E6] rounded-t-md transition-all duration-300"
              >
                <i className="ri-tools-fill mr-2"></i>Services
                <i className={`ri-arrow-down-s-fill ml-1 transition-transform duration-300 ${isServiceOpen ? 'rotate-180' : ''}`}></i>
                {isServiceOpen && (
                  <div className="bg-white border border-zinc-200 shadow-lg absolute top-[100%] left-[20%] grid grid-cols-3 px-4 py-4 gap-5 lg:gap-10 rounded-md">
                    {serviceCategories.map((category, index) => (
                      <ul key={index}>
                        <h3 className="text-[1rem] mb-2 font-semibold text-gray-800">
                          <i className={`${category.icon} mr-2 text-[#FFB600]`}></i>{category.title}
                        </h3>
                        {category.items.map((item, idx) => (
                          <li key={idx} className="text-[0.9rem] ml-3 mb-1 hover:text-[#FFB600] cursor-pointer transition-colors">
                            <i className={`${item.icon} mr-2`}></i>{item.name}
                          </li>
                        ))}
                      </ul>
                    ))}
                    <div className="flex justify-center mt-[-2rem] items-center">
                      <img className="h-[10rem]" src={menu} alt="Menu Image" />
                    </div>
                  </div>
                )}
              </li>
              
              {/* <li
                onClick={handleProcessToggle}
                className="relative cursor-pointer text-[1.1rem] p-2 border-b-2 border-transparent hover:border-[#FFB600] hover:bg-[#FFF9E6] rounded-t-md transition-all duration-300"
              >
                <i className="ri-settings-3-line mr-2"></i>Process
                <i className={`ri-arrow-down-s-fill ml-1 transition-transform duration-300 ${isProcessOpen ? 'rotate-180' : ''}`}></i>
                {isProcessOpen && (
                  <div className="absolute top-[180%] bg-white border border-zinc-200 shadow-lg z-50 rounded-md min-w-[250px]">
                    <ul className="flex flex-col">
                      {processItems.map((item, index) => (
                        <li key={index} className="flex items-center gap-3 px-4 py-3 hover:bg-[#FFF9E6] cursor-pointer transition-colors">
                          <i className={`${item.icon} text-[#FFB600]`}></i>{item.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li> */}
              
              <li className="cursor-pointer text-[1.1rem] p-2 border-b-2 border-transparent hover:border-[#FFB600] hover:bg-[#FFF9E6] rounded-t-md transition-all duration-300">
                <i className="ri-information-line mr-2"></i>
                <NavLink to="/about">About Us</NavLink>
              </li>

              <li 
                onClick={deskBlogHandler} 
                className="cursor-pointer text-[1.1rem] p-2 border-b-2 border-transparent hover:border-[#FFB600] hover:bg-[#FFF9E6] rounded-t-md transition-all duration-300 relative"
              >
                <i className="ri-article-line mr-2"></i>Blogs
                <i className={`ri-arrow-down-s-fill ml-1 transition-transform duration-300 ${DeskBlogToggle ? 'rotate-180' : ''}`}></i>
                <div ref={deskBlog} className="overflow-hidden h-[0px] border-1 border-transparent rounded-md px-2 py-2 pr-5 absolute top-[180%] left-0 bg-white shadow-lg min-w-[200px] hidden">
                  <ul >
                    {blogs.map((b, index) => {
                      return (
                        <li key={index} className="text-sm ml-3 mt-2 mb-1 whitespace-nowrap hover:text-[#FFB600] cursor-pointer transition-colors">
                          <NavLink to={`/blogs/${b.name.toLowerCase().replace(" ", "-")}`}>
                            <i className="mr-2 ri-book-marked-fill text-[#FFB600]"></i>{b.name}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
              
              <li
                onClick={handleFunctionsToggle}
                className="relative cursor-pointer text-[1.1rem] p-2 border-b-2 border-transparent hover:border-[#FFB600] hover:bg-[#FFF9E6] rounded-t-md transition-all duration-300"
              >
                <i className="ri-function-line mr-2"></i>Functions
                <i className={`ri-arrow-down-s-fill ml-1 transition-transform duration-300 ${isFunctionsOpen ? 'rotate-180' : ''}`}></i>
                {isFunctionsOpen && (
                  <div className="absolute top-[180%] bg-white border border-zinc-200 shadow-lg z-50 rounded-md min-w-[220px]">
                    <ul className="flex flex-col">
                      {functionLinks.map((item) => (
                        <li key={item.path} className="flex items-center gap-3 px-4 py-3 hover:bg-[#FFF9E6] transition-colors">
                          <NavLink
                            to={item.path}
                            className="flex items-center gap-3"
                            onClick={() => setIsFunctionsOpen(false)}
                          >
                            <i className={`${item.icon} text-[#FFB600]`}></i>
                            {item.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            </ul>
            
            <div className="flex items-center gap-4">
              {currentUser ? (
                <div className="text-sm text-right">
                  <p className="font-semibold text-gray-800">Welcome, {currentUser.name || 'Guest'}</p>
                  {currentUser.plan && (
                    <p className="text-gray-500 text-xs uppercase">Plan: {currentUser.plan}</p>
                  )}
                </div>
              ) : (
                <div className="text-sm text-right text-gray-500">
                  <p>Fetching user...</p>
                </div>
              )}
              <button 
                onClick={handleToggleUserPlan}
                className="px-3 rounded-lg py-1.5 text-[0.85rem] border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 w-fit cursor-pointer"
                title="Upgrade to Premium Plan"
              >
                <i className="ri-vip-crown-line mr-1.5"></i>Upgrade Plan
              </button>
              <button 
                onClick={handleResetSession}
                className="px-3 rounded-lg py-1.5 text-[0.85rem] border border-zinc-900 hover:bg-zinc-900 hover:text-white transition-all duration-300 w-fit cursor-pointer"
                title="Reset Datadog Session"
              >
                <i className="ri-restart-line mr-1.5"></i>Reset Session
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className="mt-3 bg-white h-0 overflow-hidden transition-all duration-300" ref={slideMenu}>
          <ul className="mobileMenu px-4 flex flex-col gap-4 sm:gap-2 pb-4">
            <li
              className="text-[1rem] border-b-[2px] sm:text-[1.2rem] border-transparent hover:border-[#FCB714] p-2 rounded-md transition-all duration-200"
              onClick={serviceClick}
              ref={service}
            >
              <span className="cursor-pointer">
                <i className="ri-tools-fill mr-2"></i>Services
              </span>
              <i className={`ri-arrow-down-s-fill cursor-pointer ml-2 transition-transform duration-300 ${toggle ? 'rotate-180' : ''}`}></i>
              <div className="overflow-y-scroll service-menu h-0" ref={outerDiv}>
                <div className="border border-zinc-400 w-full h-0 overflow-hidden rounded-md mt-2" ref={items}>
                  {serviceCategories.map((category, index) => (
                    <div key={index} className="p-4 sm:px-14">
                      <ServiceHead head={category.title} />
                      {category.items.map((item, idx) => (
                        <ServiceItem key={idx} item={item.name} />
                      ))}
                    </div>
                  ))}
                  <img className="w-[60%] sm:w-[20rem] mx-auto" src={menu} alt="Menu Image" />
                </div>
              </div>
            </li>
            
            <li
              className="text-[1rem] border-b-[2px] sm:text-[1.2rem] border-transparent hover:border-[#FCB714]  p-2 rounded-md transition-all duration-200"
              ref={process}
              onClick={processClick}
            >
              <span className="cursor-pointer">
                <i className="ri-settings-3-line mr-2"></i>Process
              </span>
              <i className={`cursor-pointer ri-arrow-down-s-fill ml-2 transition-transform duration-300 ${toggle2 ? 'rotate-180' : ''}`}></i>
              <div className="overflow-hidden pb-[0px] h-0" ref={proItems}>
                <ul className="proMenu mt-2">
                  {processItems.map((item, index) => (
                    <li key={index} className="text-lg flex items-center p-2 hover:bg-[#FFF9E6] rounded-md">
                      <i className={`${item.icon} text-xl mr-3 text-[#FFB600]`}></i>{item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            
            <li className="text-[1rem] sm:text-[1.2rem] border-b-[2px] border-transparent cursor-pointer hover:border-[#FCB714] p-2 transition-all duration-200">
              <NavLink to="/about">About Us</NavLink>
            </li>

            <li 
              onClick={mobBlogHandler} 
              className="cursor-pointer text-[1rem] sm:text-[1.2rem] border-b-[2px] border-transparent hover:border-[#FCB714] p-2 transition-all duration-200"
            >
              Blogs
              <i className={`cursor-pointer ri-arrow-down-s-fill ml-2 transition-transform duration-300 ${MobBlogToggle ? 'rotate-180' : ''}`}></i>
              <div ref={mobBlogList} className="overflow-hidden pb-[0px] h-0">
                <ul className="mt-2">
                  {blogs.map((b, index) => {
                    return (
                      <li key={index} className="text-lg ml-3 mb-2 hover:text-[#FFB600] cursor-pointer transition-colors">
                        <NavLink to={`/blogs/${b.name}`}>
                          <i className="mr-2 ri-book-marked-fill text-[#FFB600]"></i>{b.name}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>

            <li
              onClick={mobileFunctionsHandler}
              className="text-[1rem] sm:text-[1.2rem] border-b-[2px] border-transparent cursor-pointer hover:border-[#FCB714] p-2 transition-all duration-200"
            >
              Functions
              <i className={`cursor-pointer ri-arrow-down-s-fill ml-2 transition-transform duration-300 ${functionsMenuToggle ? 'rotate-180' : ''}`}></i>
              <div ref={functionsMenuList} className="overflow-hidden pb-[0px] h-0">
                <ul className="mt-2">
                  {functionLinks.map((item) => (
                    <li key={item.path} className="text-lg ml-3 mb-2 hover:text-[#FFB600] cursor-pointer transition-colors">
                      <NavLink
                        to={item.path}
                        onClick={() => {
                          setFunctionsMenuToggle(false);
                          if (functionsMenuList.current) {
                            functionsMenuList.current.style.height = "0px";
                          }
                          setMenuToggle(false);
                          if (slideMenu.current) {
                            slideMenu.current.style.height = "0px";
                          }
                        }}
                      >
                        <i className={`mr-2 ${item.icon} text-[#FFB600]`}></i>
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            
            <div className="flex flex-col gap-3">
              {currentUser ? (
                <>
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">User:</span> {currentUser.name || 'Guest'}
                  </p>
                  {currentUser.plan && (
                    <p className="text-sm text-gray-500 uppercase">Plan: {currentUser.plan}</p>
                  )}
                </>
              ) : (
                <p className="text-sm text-gray-500">Fetching user...</p>
              )}
              <div className="flex flex-col gap-2">
                <button 
                  onClick={handleToggleUserPlan}
                  className="w-full px-3 rounded-lg py-1.5 text-xs border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 cursor-pointer"
                  title="Upgrade to Premium Plan"
                >
                  <i className="ri-vip-crown-line mr-1.5"></i>Upgrade Plan
                </button>
                <button 
                  onClick={handleResetSession}
                  className="w-full px-3 rounded-lg py-1.5 text-xs border border-zinc-900 hover:bg-zinc-900 hover:text-white transition-all duration-300 cursor-pointer"
                  title="Reset Datadog Session"
                >
                  <i className="ri-restart-line mr-1.5"></i>Reset Session
                </button>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;