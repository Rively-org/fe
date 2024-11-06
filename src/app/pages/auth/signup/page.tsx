"use client";
import React,{ useEffect,useState } from 'react';

import Image from "next/image";
import Link from "next/link";
import Styles from '../signup.module.css';
import Style from '../../../components/profile_modal/profile.module.css';
import StylesC from '../../../components/competitors/competitors.module.css';
import Logo from '../../../../../public/assets/logo_main.png';
import Google from '../../../../../public/assets/google.svg';
import Linkedin from '../../../../../public/assets/LinkedIn .png'; // Removed extra space in filename




export default function Signup() {
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
    const [isCompetitorsModalOpen, setIsCompetitorsModalOpen] = useState(false);

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        setIsProfileModalOpen(true); // Show the ProfileModal when the signup form is submitted
    };

    const handleProfileComplete = () => {
        setIsProfileModalOpen(false); // Close ProfileModal
        setIsCompetitorsModalOpen(true); // Open Competitors modal
    };

    return (
        <div className={Styles.landing_page}>
            <div className={Styles.left_landing}>
                <div className={Styles.logo_main}>
                    <Image className={Styles.Logo_main_img} src={Logo} alt="RLY Logo" />
                    <span className={Styles.logo_text}>RIVELY</span>
                </div>

                <div className={Styles.header_title}>
                    Create your account
                    <span className={Styles.header_subscript}>Let's get you started real quick</span>
                </div>

                <div className={Styles.main_login_box}>
                    <form className={Styles.form} onSubmit={handleSignup}>
                        <div className={Styles.row_login}>
                            <label htmlFor="email" className={Styles.label_input}>Email Address</label>
                            <input type="email" id="email" className={Styles.input_box} placeholder="✉️ Enter your email" required />
                        </div>
                        <div className={Styles.row_login}>
                            <label htmlFor="password" className={Styles.label_input}>Password</label>
                            <input type="password" id="password" className={Styles.input_box} placeholder="🔒 Enter your password" required />
                        </div>
                        <div className={Styles.row_login}>
                            <label htmlFor="confirmPassword" className={Styles.label_input}>Confirm Password</label>
                            <input type="password" id="confirmPassword" className={Styles.input_box} placeholder="🔒 Re-Enter your password" required />
                        </div>
                        <div className={Styles.checkbox}>
                            <input type="checkbox" id="termscheck" name="check" required />
                            <label htmlFor="termscheck" className={Styles.checkbox_content}>
                                By creating an account, I agree with Your <a href="#">Terms and conditions</a>
                            </label>
                        </div>
                        <div className={Styles.lbtn}>
                            <button type="submit" className={Styles.loginButton}>Signup</button>
                        </div>
                        <div className={Styles.oneliner}>
                            <hr className={Styles.gradient_line} />
                            <p>Or</p>
                            <hr className={Styles.gradient_line} />
                        </div>
                        <div className={Styles.login_shortcuts}>
                            <Image src={Google} className={Styles.shortcuts_logos} alt="Google" />
                            <Image src={Linkedin} className={Styles.shortcuts_logos} alt="LinkedIn" />
                        </div>
                        <div className={Styles.other_ways}>
                            <p>New to Platform?</p>
                            <Link href="/auth/login"><p className={Styles.signup}>Log in</p></Link>
                        </div>
                    </form>
                </div>
            </div>
            <div className={Styles.right_landing}>
                <div className={Styles.ringcontainer}>
                    <div className={Styles.outerring}>
                        <div className={Styles.innerring}>
                            <div className={Styles.news}>
                                <div className={Styles.newsItem_1}>
                                    <p>Airtable and Notion are two highly rated project management software solutions.</p>
                                    <span>- India Today</span>
                                </div>
                                <div className={Styles.newsItem_2}>
                                    <p>Moon Pay now offers Tether (ERC-20) swaps with no processing fee and has earned an ISO 27001 Certification.</p>
                                    <span>- The Hindu</span>
                                </div>
                                <div className={Styles.newsItem_3}>
                                    <p>Airtable and Notion are two highly rated project management software solutions.</p>
                                    <span>- India Today</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Conditionally render the ProfileModal */}
            {isProfileModalOpen && <ProfileModal onClose={() => setIsProfileModalOpen(false)} onComplete={handleProfileComplete} />}

            {/* Conditionally render the Competitors modal */}
            {isCompetitorsModalOpen && <Competitors onClose={() => setIsCompetitorsModalOpen(false)} />}
        </div>
    );
}


interface ProfileModalProps {
    onClose: () => void;
    onComplete: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ onClose, onComplete }) => {
    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        onComplete(); // Trigger the onComplete callback to open Competitors modal
    };

    return (
        <div className={Style.modal_overlay}>
            <div className={Style.modal_box}>
                <div className={Style.modal_title}>Help us to understand you better</div>
                <form className={Style.form} onSubmit={handleSignup}>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        className={Style.input}
                        placeholder="Enter your full name"
                        required
                    />

                    <label>Role</label>
                    <select name="role" className={Style.input} required>
                        <option value="">Enter your role</option>
                        <option value="Developer">Developer</option>
                        <option value="Designer">Designer</option>
                        <option value="Manager">Manager</option>
                        <option value="Other">Other</option>
                    </select>

                    <label>Company's Name</label>
                    <input
                        type="text"
                        name="companyName"
                        className={Style.input}
                        placeholder="Enter your company's name"
                        required
                    />

                    <label>Company's Website</label>
                    <input
                        type="url"
                        name="website"
                        className={Style.input}
                        placeholder="https://"
                        required
                    />

                    <label>Company Description</label>
                    <textarea
                        name="description"
                        className={Style.input}
                        placeholder="E.g. E-commerce website selling traditional groceries in Tamil Nadu"
                        required
                    />
                    <div className={Style.n_button}>
                        <button type="submit" className={Style.next_button}>
                            Next →
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// Competitors Component
interface Competitor {
    name: string;
    logo: string;
    url: string;
    interests: string[];
}

interface CompetitorsProps {
    onClose: () => void;
    onCompetitorSelect?: (competitors: Competitor[]) => void;
}

const Competitors: React.FC<CompetitorsProps> = ({ onClose, onCompetitorSelect }) => {
    const [selectedCompetitors, setSelectedCompetitors] = useState<Competitor[]>([]);
    const [competitors, setCompetitors] = useState<Competitor[]>([]);
    const [interests, setInterests] = useState<string[]>([]);
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

    useEffect(() => {
        setCompetitors([
            {
                name: "company 1",
                logo: "/dummy.png",
                url: "https://company1.com",
                interests: [
                    "Product Offering",
                    "Pricing",
                    "M&A",
                    "LayOffs",
                    "Content Marketing",
                    "Tech Stack",
                    "Vendors",
                    "Market Entry",
                    "Management Changes",
                ],
            },
            // Add other companies here...
        ]);
    }, []);

    const handleAddCompetitor = (competitor: Competitor) => {
        if (!selectedCompetitors.includes(competitor)) {
            setSelectedCompetitors([...selectedCompetitors, competitor]);
            setInterests(competitor.interests);
        }
    };

    const handleInterestSelection = (interest: string) => {
        setSelectedInterests(
            selectedInterests.includes(interest)
                ? selectedInterests.filter(item => item !== interest)
                : [...selectedInterests, interest]
        );
    };

    const handleRemoveCompetitor = (index: number) => {
        setSelectedCompetitors(selectedCompetitors.filter((_, ind) => ind !== index));
    };

    return (
        <div className={StylesC.competitors__container}>
            <div className={StylesC.competitors}>
                <h2 className={StylesC.competitors__head}>Choose Your Competitors</h2>
                <div className={StylesC.competitors__grid}>
                    {/* Competitors List */}
                    <div className={`${StylesC.competitors__item} ${StylesC.competitors__browse}`}>
                        <h3>Browse Your Competitors</h3>
                        <div className={StylesC.competitors__search}>
                            <span className={StylesC.competitors__inputGroup}>
                                <img src="/search.png" alt="search" />
                                <input
                                    className={StylesC.competitor__input}
                                    type="text"
                                    placeholder="Enter your competitor’s name or website URL"
                                />
                            </span>
                            <img src="/filter.png" alt="filter" />
                        </div>
                        <div className={StylesC.competitors__list}>
                            {competitors.map((competitor, index) => (
                                <div key={index} className={StylesC.competitors__listItem}>
                                    <Image src={competitor.logo} alt={competitor.name} height={55} width={55} />
                                    <div className={StylesC.competitors__description}>
                                        <p className={StylesC.competitors__name}>{competitor.name}</p>
                                        <a href={competitor.url} target="_blank" rel="noreferrer" className={StylesC.competitors__url}>
                                            {competitor.name}
                                        </a>
                                    </div>
                                    <button
                                        className={StylesC.competitors__button}
                                        onClick={() => handleAddCompetitor(competitor)}
                                    >
                                        + Add
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Interest Selection */}
                    <div className={`${StylesC.competitors__item} ${StylesC.competitors__interests}`}>
                        {selectedCompetitors.length > 0 ? (
                            <>
                                <h3>Choose Top Interests to Track</h3>
                                <div className={StylesC.competitors__interestList}>
                                    {interests.map((interest, index) => (
                                        <div
                                            key={index}
                                            className={`${StylesC.competitors__interestItem} ${
                                                selectedInterests.includes(interest) ? StylesC.competitors__selectedItem : ""
                                            }`}
                                            onClick={() => handleInterestSelection(interest)}
                                        >
                                            + {interest}
                                        </div>
                                    ))}
                                </div>
                                <button className={StylesC.competitors__button}>Confirm</button>
                            </>
                        ) : (
                            <p>No Company Selected</p>
                        )}
                    </div>
                    {/* Selected Competitors */}
                    <div className={`${StylesC.competitors__item} ${StylesC.competitors__selected}`}>
                        <h3>Companies Selected</h3>
                        <div className={StylesC.competitors__selectedList}>
                            {selectedCompetitors.map((competitor, index) => (
                                <div className={StylesC.competitors__selectedCompetitor} key={index}>
                                    {competitor.name}
                                    <span className={StylesC.competitors__selectedRemove} onClick={() => handleRemoveCompetitor(index)}>
                                        x
                                    </span>
                                </div>
                            ))}
                        </div>
                        <button className={StylesC.competitors__button} onClick={onClose}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// interface ProfileModalProps {
//     onClose: () => void;
// }

// const ProfileModal: React.FC<ProfileModalProps> = ({ onClose }) => {
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const handleSignup = (e: React.FormEvent) => {
//         e.preventDefault();
//         setIsModalOpen(true); // Show the modal when the signup button is clicked
//     };

//     return (
//         <div className={Style.modal_overlay}>
//             <div className={Style.modal_box}>
//                 <div className={Style.modal_title}>Help us to understand you better</div>
//                 <form className={Style.form} onSubmit={handleSignup} >
//                     <label>Name</label>
//                     <input
//                         type="text"
//                         name="name"
//                         className={Style.input}
//                         placeholder="Enter your full name"
//                         required
//                     />

//                     <label>Role</label>
//                     <select name="role" className={Style.input} required>
//                         <option value="">Enter your role</option>
//                         <option value="Developer">Developer</option>
//                         <option value="Designer">Designer</option>
//                         <option value="Manager">Manager</option>
//                         <option value="Other">Other</option>
//                     </select>

//                     <label>Company's Name</label>
//                     <input
//                         type="text"
//                         name="companyName"
//                         className={Style.input}
//                         placeholder="Enter your company's name"
//                         required
//                     />

//                     <label>Company's Website</label>
//                     <input
//                         type="url"
//                         name="website"
//                         className={Style.input}
//                         placeholder="https://"
//                         required
//                     />

//                     <label>Company Description</label>
//                     <textarea
//                         name="description"
//                         className={Style.input}
//                         placeholder="Eg. E-commerce website selling traditional groceries in Tamil Nadu"
//                         required
//                     />
//                 </form>
//                 <div className={Style.n_button}>
//                     <button type="submit" className={Style.next_button} >
//                         Next →
//                     </button>
//                 </div>
//             </div>
//             {isModalOpen && <Competitors onClose={() => setIsModalOpen(false)} />}
//         </div>
        
//     );
// };



// interface Competitor {
//     name: string;
//     logo: string;
//     url: string;
//     interests: string[];
// }

// interface CompetitorsProps {
//     onCompetitorSelect?: (competitors: Competitor[]) => void;
// }

// const Competitors: React.FC<CompetitorsProps> = ({ onCompetitorSelect }) => {
//     const [selectedCompetitors, setSelectedCompetitors] = useState<Competitor[]>([]);
//     const [competitors, setCompetitors] = useState<Competitor[]>([]);
//     const [interests, setInterests] = useState<string[]>([]);
//     const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

//     useEffect(() => {
//         setCompetitors([
//             {
//                 name: "company 1",
//                 logo: "/dummy.png",
//                 url: "https://company1.com",
//                 interests: [
//                     "Product Offering",
//                     "Pricing",
//                     "M&A",
//                     "LayOffs",
//                     "Content Marketing",
//                     "Tech Stack",
//                     "Vendors",
//                     "Market Entry",
//                     "Management Changes",
//                 ],
//             },
//             // Other companies here...
//         ]);
//     }, []);

//     const handleAddCompetitor = (competitor: Competitor) => {
//         if (!selectedCompetitors.includes(competitor)) {
//             setSelectedCompetitors([...selectedCompetitors, competitor]);
//             setInterests(competitor.interests);
//         }
//     };

//     const handleInterestSelection = (interest: string) => {
//         if (selectedInterests.includes(interest)) {
//             setSelectedInterests(selectedInterests.filter(item => item !== interest));
//         } else {
//             setSelectedInterests([...selectedInterests, interest]);
//         }
//     };

//     const handleRemoveCompetitor = (index: number) => {
//         setSelectedCompetitors(selectedCompetitors.filter((_, ind) => ind !== index));
//     };

//     return (
//         <div className={StylesC.competitors__container}>
//             <div className={StylesC.competitors}>
//                 <h2 className={StylesC.competitors__head}>Choose Your Competitors</h2>
//                 <div className={StylesC.competitors__grid}>
//                     {/* Competitors List */}
//                     <div className={`${StylesC.competitors__item} ${StylesC.competitors__browse}`}>
//                         <h3>Browse Your Competitors</h3>
//                         <div className={StylesC.competitors__search}>
//                             <span className={StylesC.competitors__inputGroup}>
//                                 <img src="/search.png" alt="search" />
//                                 <input
//                                     className={StylesC.competitor__input}
//                                     type="text"
//                                     placeholder="Enter your competitor’s name or website URL"
//                                 />
//                             </span>
//                             <img src="/filter.png" alt="filter" />
//                         </div>
//                         <div className={StylesC.competitors__list}>
//                             {competitors.map((competitor, index) => (
//                                 <div key={index} className={StylesC.competitors__listItem}>
//                                     <Image src={competitor.logo} alt={competitor.name} height={55} width={55} />
//                                     <div className={StylesC.competitors__description}>
//                                         <p className={StylesC.competitors__name}>{competitor.name}</p>
//                                         <a href={competitor.url} target="_blank" rel="noreferrer" className={StylesC.competitors__url}>
//                                             {competitor.name}
//                                         </a>
//                                     </div>
//                                     <button
//                                         className={StylesC.competitors__button}
//                                         onClick={() => handleAddCompetitor(competitor)}
//                                     >
//                                         + Add
//                                     </button>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     {/* Interest Selection */}
//                     <div className={`${StylesC.competitors__item} ${StylesC.competitors__interests}`}>
//                         {selectedCompetitors.length > 0 ? (
//                             <>
//                                 <h3>Choose Top Interests to Track</h3>
//                                 <div className={StylesC.competitors__interestList}>
//                                     {interests.map((interest, index) => (
//                                         <div
//                                             key={index}
//                                             className={`${StylesC.competitors__interestItem} ${
//                                                 selectedInterests.includes(interest) ? StylesC.competitors__selectedItem : ''
//                                             }`}
//                                             onClick={() => handleInterestSelection(interest)}
//                                         >
//                                             + {interest}
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <button className={StylesC.competitors__button}>Confirm</button>
//                             </>
//                         ) : (
//                             <p>No Company Selected</p>
//                         )}
//                     </div>
//                     {/* Selected Competitors */}
//                     <div className={`${StylesC.competitors__item} ${StylesC.competitors__selected}`}>
//                         <h3>Companies Selected</h3>
//                         <div className={StylesC.competitors__selectedList}>
//                             {selectedCompetitors.map((competitor, index) => (
//                                 <div className={StylesC.competitors__selectedCompetitor} key={index}>
//                                     {competitor.name}
//                                     <span className={StylesC.competitors__selectedRemove} onClick={() => handleRemoveCompetitor(index)}>
//                                         x
//                                     </span>
//                                 </div>
//                             ))}
//                         </div>
//                         <button className={StylesC.competitors__button} onClick={() => onCompetitorSelect?.(selectedCompetitors)}>
//                             Next
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };






// export default function Signup() {

//     return (
//         <div className={Styles.landing_page}>
//             <div className={Styles.left_landing}>
//                 <div className={Styles.logo_main}>
//                     <Image className={Styles.Logo_main_img} src={Logo} alt="Instagram" />
//                     <span className={Styles.logo_text}>RIVELY</span>
//                 </div>

//                 <div className={Styles.header_title}>
//                     Create your account
//                     <span className={Styles.header_subscript}>
//                         Let's get you started real quick
//                     </span>
//                 </div>

//                 <div className={Styles.main_login_box}>
//                     <form className={Styles.form}>
//                         <div className={Styles.row_login}>
//                             <label htmlFor="email" className={Styles.label_input}>Email Address</label>
//                             <input type="email" id="email" className={Styles.input_box} placeholder="✉️ Enter your email" />
//                         </div>
//                         <div className={Styles.row_login}>
//                             <label htmlFor="password" className={Styles.label_input}>Password</label>
//                             <input type="password" id="password" className={Styles.input_box} placeholder="🔒 Enter your password" />
//                         </div>
//                         <div className={Styles.row_login}>
//                             <label htmlFor="confirmPassword" className={Styles.label_input}>Confirm Password</label>
//                             <input type="password" id="confirmPassword" className={Styles.input_box} placeholder="🔒 Re-Enter your password" />
//                         </div>
//                         <div className={Styles.checkbox}>
//                             <input type="checkbox" id="termscheck" name="check" />
//                             <label htmlFor="termscheck" className={Styles.checkbox_content}>
//                                 By creating an account, I agree with Your <a href="#">Terms and conditions</a>
//                             </label>
//                         </div>
//                         <div className={Styles.lbtn}>
//                             <button type="submit" className={Styles.loginButton}>Signup</button>
//                         </div>
//                         <div className={Styles.oneliner}>
//                             <hr className={Styles.gradient_line} />
//                             <p>Or</p>
//                             <hr className={Styles.gradient_line} />
//                         </div>
//                         <div className={Styles.login_shortcuts}>
//                             <Image src={Google} className={Styles.shortcuts_logos} alt='google' />
//                             <Image src={Linkedin} className={Styles.shortcuts_logos} alt='linkedin' />
//                         </div>
//                         <div className={Styles.other_ways}>
//                             <p>New to Platform?</p>
//                             <Link href="../../../pages/auth/login"> <p className={Styles.signup}>Login in</p></Link>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//             <div className={Styles.right_landing}>
//                 <div className={Styles.ringcontainer}>
//                     <div className={Styles.outerring}>
//                         <div className={Styles.innerring}>
//                             <div className={Styles.news}>
//                                 <div className={Styles.newsItem_1}>
//                                     <p>Airtable and Notion are two highly rated project management software solutions.</p>
//                                     <span>- India Today</span>
//                                 </div>
//                                 <div className={Styles.newsItem_2}>
//                                     <p>Moon Pay now offers Tether (ERC-20) swaps with no processing fee and has earned an ISO 27001 Certification.</p>
//                                     <span>- The Hindu</span>
//                                 </div>
//                                 <div className={Styles.newsItem_3}>
//                                     <p>Airtable and Notion are two highly rated project management software solutions.</p>
//                                     <span>- India Today</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
 

// // Signup.tsx
// "use client";
// // Signup.tsx
// import React, { useState } from 'react';
// import Image from "next/image";
// import Link from "next/link";
// import Styles from '../signup.module.css';
// import Profile from '../../../components/profile_modal/profile'; // Import the Profile modal
// import Logo from '../../../../../public/assets/logo_main.png';
// import Google from '../../../../../public/assets/google.svg';
// import Linkedin from '../../../../../public/assets/LinkedIn .png';

// export default function Signup() {
//     const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);

//     const handleSignupClick = (e: React.MouseEvent<HTMLButtonElement>) => {
//         e.preventDefault();
//         setIsProfileModalOpen(true); // Open the Profile modal
//     };

//     const closeProfileModal = () => {
//         setIsProfileModalOpen(false); // Close the Profile modal
//     };

//     return (
//         <div className={Styles.landing_page}>
//             <div className={Styles.left_landing}>
//                 <div className={Styles.logo_main}>
//                     <Image className={Styles.Logo_main_img} src={Logo} alt="Instagram" />
//                     <span className={Styles.logo_text}>RIVELY</span>
//                 </div>

//                 <div className={Styles.header_title}>
//                     Create your account
//                     <span className={Styles.header_subscript}>
//                         Let's get you started real quick
//                     </span>
//                 </div>

//                 <div className={Styles.main_login_box}>
//                     <form className={Styles.form}>
//                         <div className={Styles.row_login}>
//                             <label htmlFor="email" className={Styles.label_input}>Email Address</label>
//                             <input type="email" id="email" className={Styles.input_box} placeholder="✉️ Enter your email" />
//                         </div>
//                         <div className={Styles.row_login}>
//                             <label htmlFor="password" className={Styles.label_input}>Password</label>
//                             <input type="password" id="password" className={Styles.input_box} placeholder="🔒 Enter your password" />
//                         </div>
//                         <div className={Styles.row_login}>
//                             <label htmlFor="confirmPassword" className={Styles.label_input}>Confirm Password</label>
//                             <input type="password" id="confirmPassword" className={Styles.input_box} placeholder="🔒 Re-Enter your password" />
//                         </div>
//                         <div className={Styles.checkbox}>
//                             <input type="checkbox" id="termscheck" name="check" />
//                             <label htmlFor="termscheck" className={Styles.checkbox_content}>
//                                 By creating an account, I agree with Your <a href="#">Terms and conditions</a>
//                             </label>
//                         </div>
//                         <div className={Styles.lbtn}>
//                             <button type="submit" className={Styles.loginButton} onClick={handleSignupClick}>Sign Up</button> 
                            
//                         </div>
//                         <div className={Styles.oneliner}>
//                             <hr className={Styles.gradient_line} />
//                             <p>Or</p>
//                             <hr className={Styles.gradient_line} />
//                         </div>
//                         <div className={Styles.login_shortcuts}>
//                             <Image src={Google} className={Styles.shortcuts_logos} alt='google' />
//                             <Image src={Linkedin} className={Styles.shortcuts_logos} alt='linkedin' />
//                         </div>
//                         <div className={Styles.other_ways}>
//                             <p>New to Platform?</p>
//                             <Link href="../../../pages/auth/login"> <p className={Styles.signup}>Login in</p></Link>
//                         </div>
//                     </form>
//                 </div>
//             </div>

//             <div className={Styles.right_landing}>
//             <div className={Styles.ringcontainer}>
//           <div className={Styles.outerring}>
//               <div className={Styles.innerring}>
//                 <div className={Styles.news}>
//                   <div className={Styles.newsItem_1}>
//                     <p>Airtable and Notion are two highly rated project management software solutions.</p>
//                     <span>- India Today</span>
//                   </div>

//                   <div className={Styles.newsItem_2}>
//                     <p>Moon Pay now offers Tether (ERC-20) swaps with no processing fee and has earned an ISO 27001 Certification.</p>
//                     <span>- The Hindu</span>
//                   </div>

//                   <div className={Styles.newsItem_3}>
//                     <p>Airtable and Notion are two highly rated project management software solutions.</p>
//                     <span>- India Today</span>
//                   </div>
//                 </div>
//               </div>
          
//           </div>
//         </div>
//             </div>

            
//         </div>
//     );
// }


// "use client";
// // Signup.tsx
// import React, { useState } from 'react';
// import Image from "next/image";
// import Link from "next/link";
// import Styles from '../signup.module.css';
// import ProfileModal from '../../../components/profile_modal/page'; // Import the Profile modal
//     import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio} from "@nextui-org/react";
//  // Import Button component from NextUI
// import Logo from '../../../../../public/assets/logo_main.png';
// import Google from '../../../../../public/assets/google.svg';
// import Linkedin from '../../../../../public/assets/LinkedIn .png';

// export default function Signup() {
//     const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);

//     const handleSignupClick = (e: React.MouseEvent<HTMLButtonElement>) => {
//         e.preventDefault();
//         setIsProfileModalOpen(true); // Open the Profile modal
//     };

//     const closeProfileModal = () => {
//         setIsProfileModalOpen(false); // Close the Profile modal
//     };

//     return (
//         <div className={Styles.landing_page}>
//             <div className={Styles.left_landing}>
//                 <div className={Styles.logo_main}>
//                     <Image className={Styles.Logo_main_img} src={Logo} alt="Instagram" />
//                     <span className={Styles.logo_text}>RIVELY</span>
//                 </div>

//                 <div className={Styles.header_title}>
//                     Create your account
//                     <span className={Styles.header_subscript}>
//                         Let's get you started real quick
//                     </span>
//                 </div>

//                 <div className={Styles.main_login_box}>
//                     <form className={Styles.form}>
//                         <div className={Styles.row_login}>
//                             <label htmlFor="email" className={Styles.label_input}>Email Address</label>
//                             <input type="email" id="email" className={Styles.input_box} placeholder="✉️ Enter your email" />
//                         </div>
//                         <div className={Styles.row_login}>
//                             <label htmlFor="password" className={Styles.label_input}>Password</label>
//                             <input type="password" id="password" className={Styles.input_box} placeholder="🔒 Enter your password" />
//                         </div>
//                         <div className={Styles.row_login}>
//                             <label htmlFor="confirmPassword" className={Styles.label_input}>Confirm Password</label>
//                             <input type="password" id="confirmPassword" className={Styles.input_box} placeholder="🔒 Re-Enter your password" />
//                         </div>
//                         <div className={Styles.checkbox}>
//                             <input type="checkbox" id="termscheck" name="check" />
//                             <label htmlFor="termscheck" className={Styles.checkbox_content}>
//                                 By creating an account, I agree with Your <a href="#">Terms and conditions</a>
//                             </label>
//                         </div>
//                         <div className={Styles.lbtn}>
//                             <Button onPress={handleSignupClick} color="primary" auto>Sign Up</Button> 
//                         </div>
//                         <div className={Styles.oneliner}>
//                             <hr className={Styles.gradient_line} />
//                             <p>Or</p>
//                             <hr className={Styles.gradient_line} />
//                         </div>
//                         <div className={Styles.login_shortcuts}>
//                             <Image src={Google} className={Styles.shortcuts_logos} alt='google' />
//                             <Image src={Linkedin} className={Styles.shortcuts_logos} alt='linkedin' />
//                         </div>
//                         <div className={Styles.other_ways}>
//                             <p>New to Platform?</p>
//                             <Link href="../../../pages/auth/login"> <p className={Styles.signup}>Login in</p></Link>
//                         </div>
//                     </form>
//                 </div>
//             </div>

//             <div className={Styles.right_landing}>
//                 <div className={Styles.ringcontainer}>
//                     <div className={Styles.outerring}>
//                         <div className={Styles.innerring}>
//                             <div className={Styles.news}>
//                                 <div className={Styles.newsItem_1}>
//                                     <p>Airtable and Notion are two highly rated project management software solutions.</p>
//                                     <span>- India Today</span>
//                                 </div>
//                                 <div className={Styles.newsItem_2}>
//                                     <p>Moon Pay now offers Tether (ERC-20) swaps with no processing fee and has earned an ISO 27001 Certification.</p>
//                                     <span>- The Hindu</span>
//                                 </div>
//                                 <div className={Styles.newsItem_3}>
//                                     <p>Airtable and Notion are two highly rated project management software solutions.</p>
//                                     <span>- India Today</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Profile Modal */}
//             {isProfileModalOpen && (
//                 <ProfileModal isOpen={isProfileModalOpen} onClose={closeProfileModal} />
//             )}
//         </div>
//     );
// }
