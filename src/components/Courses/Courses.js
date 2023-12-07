import React, { useState, useEffect } from 'react';
import axios from 'axios';
import math_updated from './math.jpg'
import bio_updated from './bio_updated.jpg'
import chem_updated from './chem_update.png'
import coding_updated from './download.png'
import cook_updated from './food.jpg'
import gym_updated from './Wellbeing-blog_Cover.jpg'
import lit_updated from './lit_updated.jpg'
import music_updated from './music_updated.jpg'
import photo_updated from './photo_updated.jpg'
import phy_updated from './phy_updated.jpg'



import './Courses.css'

const CoursesSection = () => {
    // const [courses, setCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [showDescription, setShowDescription] = useState(false);
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const courses=
    [
        {
            "id": 1,
            "index": 1,
            "name": "Advanced Mathematics",
            "image": math_updated,
            "description": "Our Advanced Mathematics course is tailored for students of all levels, from beginners to advanced learners. Whether you seek to enhance your math skills for school or your career, this course offers comprehensive coverage. Topics include advanced algebra, geometry, trigonometry, and calculus. Experienced instructors will provide clear explanations and examples to facilitate a deep understanding of the concepts.",
            "price": 249.99
        },
        {
            "id": 2,
            "index": 2,
            "name": "Genetic Studies",
            "image": bio_updated,
            "description": "Genetic Studies is an exploration of living organisms and their interactions with each other and the environment. This course encompasses genetics, evolution, ecology, physiology, and biotechnology. It delves into the natural sciences, aiming to comprehend the workings of living things at all levels, from molecular and cellular to organismal and ecosystemic.",
            "price": 289.99
        },
        {
            "id": 3,
            "index": 3,
            "name": "Advanced Chemistry",
            "image": chem_updated,
            "description": "The Advanced Chemistry course spans various topics, including atomic structure, chemical bonding, reactions, thermochemistry, and solutions. Expert instructors guide you through each subject, offering clear explanations and examples. Engage in hands-on laboratory experiments and simulations to apply these concepts effectively.",
            "price": 219.99
        },
        {
            "id": 4,
            "index": 4,
            "name": "Programming Foundations",
            "image": coding_updated,
            "description": "Establish a solid foundation in programming and initiate your journey into the world of technology with our Programming Foundations course. Study diverse programming languages such as Python, JavaScript, and Java. Explore data structures, algorithms, and software development principles. Develop your projects to bring your ideas to life.",
            "price": 259.99
        },
        {
            "id": 5,
            "index": 5,
            "name": "Culinary Arts",
            "image": cook_updated,
            "description": "Embark on the art of cooking with our Culinary Arts course. Master various culinary techniques and methods, delve into different cuisines and cultures, and refine your palate. Craft delicious meals for yourself and loved ones, showcasing your culinary prowess to impress guests.",
            "price": 239.99
        },
        {
            "id": 6,
            "index": 6,
            "name": "Holistic Well-being",
            "image": gym_updated,
            "description": "Enhance your physical and mental well-being with our Holistic Well-being course. Explore nutrition, exercise, and healthy lifestyle choices. Study various fitness disciplines like yoga, Pilates, and strength training. Develop a personalized fitness plan and achieve your well-being goals.",
            "price": 209.99
        },
        {
            "id": 7,
            "index": 7,
            "name": "World Literature",
            "image": lit_updated,
            "description": "Embark on a journey through World Literature with our comprehensive course. Analyze classic and contemporary texts from diverse cultures and time periods, examining themes, symbolism, and literary devices. Cultivate critical analysis, interpretation, and appreciation of literary works. Unleash your creativity through writing exercises and discussions.",
            "price": 159.99
        },
        {
            "id": 8,
            "index": 8,
            "name": "Music Exploration",
            "image": music_updated,
            "description": "Unleash your creativity and passion for music with our Music Exploration course. Learn to play instruments or enhance your singing skills, grasp music theory and notation, and explore various music genres and styles. Create original compositions and uncover your artistic potential.",
            "price": 239.99
        },
        {
            "id": 9,
            "index": 9,
            "name": "Artistic Photography",
            "image": photo_updated,
            "description": "Master the art of photography and capture the most beautiful moments with our Artistic Photography course. Explore the technical aspects of photography, including exposure, composition, and lighting. Delve into various types of photography, from landscapes to portraits, and unlock your creative potential. Develop your unique style to create stunning images.",
            "price": 269.99
        },
        {
            "id": 10,
            "index": 10,
            "name": "Astrophysics",
            "image": phy_updated,
            "description": "Unlock the mysteries of the universe with our Astrophysics course. Study the laws and principles governing the physical world, from classical mechanics to quantum mechanics. Solve complex problems and conduct experiments to verify scientific theories. Develop a profound understanding of the fundamental concepts of physics in the context of the cosmos.",
            "price": 249.99
        }
    ]
    
    
    
    

    const params = new URLSearchParams(window.location.search);
    // const usernameParam = params.get('username');
    // useEffect(() => {
    //     axios.get('http://localhost:4000/api/courses')
    //         .then(response => setCourses(response.data))
    //         .catch(error => console.error(error));
    // }, []);
    // const [alertShown, setAlertShown] = useState(false);

    // useEffect(() => {
    //     // Check to see if this is a redirect back from Checkout
    //     const query = new URLSearchParams(window.location.search);

    //     if (query.get("success") && !alertShown) {
    //         window.alert("Order placed!");
    //         setAlertShown(true);
    //     }

    //     if (query.get("canceled") && !alertShown) {
    //         window.alert(
    //             "Order canceled -- continue to shop around and checkout when you're ready."
    //         );
    //         setAlertShown(true);
    //     }
    // }, [alertShown]);
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredCourses = courses.filter((course) =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const handleShowDescription = (course) => {
        setShowDescription(true);
        setSelectedCourse(course);
    };
    const handleAddToCart = (course) => {
        setCart([...cart, course]);
        setShowCart(true);
    };
    const handleRemoveFromCart = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
    };


    const handleCloseDescription = () => {
        setShowDescription(false);
        setSelectedCourse(null);
    };


    return (
        <section id="courses">
            <h2>Courses</h2>
            <div className="search-container">
                <input className="search-input"
                    type="text"
                    placeholder="Search by name"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            <div className="courses-grid">

                {filteredCourses.map((course) => (
                    <div className="course" key={course.name}>
                        <img src={course.image} alt={course.name} />

                        <h3>{course.name}</h3>
                        <p>${course.price}</p>
                        <button className="cbutton" onClick={() => handleShowDescription(course)}>
                            Show Description
                        </button>

                        <button className="cbutton" onClick={() => handleAddToCart(course)}>
                            Add to Cart
                        </button>
                    </div>
                ))}
                {showDescription && (
                    <div className="description-overlay">
                        <div className="description-content">

                            {selectedCourse && (
                                <>
                                    <h3>{selectedCourse.name}</h3>
                                    <p>{selectedCourse.description}</p>
                                </>

                            )}
                            <button className="cbutton" onClick={handleCloseDescription}>
                                Close
                            </button>
                        </div>
                    </div>
                )}
                {showCart && (
                    <div className="cart-overlay">
                        <button className="cbutton"
                            onClick={() => setShowCart(false)}
                        >Close</button>
                        <h3>Cart</h3>
                        <ul>
                            {cart.map((course, index) => (
                                <li key={course.name}>
                                    {course.name} - ${course.price}
                                    <button className="cbutton" onClick={() => handleRemoveFromCart(index)}>Remove</button>
                                </li>
                            ))}
                        </ul>
                        {showCart > 0 && (
                            <div className="total-price">
                                <h3>Total Price: $
                                    {cart.reduce((total, course) => total + course.price, 0)}</h3>
                            </div>
                        )}
                        {/* <section>
                            <form action="http://localhost:4000/create-checkout-session" method="POST">
                                <input type="hidden" name="totalPrice" value={cart.reduce((total, course) => total + course.price, 0)} />
                                <input type="hidden" name="username" value={usernameParam} />
                                <button className="cbutton" type="submit">
                                    Checkout
                                </button>
                            </form>
                        </section> */}
                    </div>
                )}
            </div></section>
    );
};

export default CoursesSection;
