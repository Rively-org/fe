import React from 'react';
import Styles from './profile.module.css';

interface ProfileProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Profile({ isOpen, onClose }: ProfileProps) {
    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add any form submission logic here
        onClose(); // Close modal after submission
    };

    return (
        <div className={Styles.modalOverlay} onClick={onClose}>
            <div className={Styles.modalBox} onClick={(e) => e.stopPropagation()}>
                <div className={Styles.modalTitle}>
                    Help us to understand you better
                </div>
                <form className={Styles.form} onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        className={Styles.input}
                        placeholder="Enter your full name"
                        required
                    />

                    <label>Role</label>
                    <select
                        name="role"
                        className={Styles.input}
                        required
                    >
                        <option value="" disabled selected>Enter your role</option>
                        <option value="Developer">Developer</option>
                        <option value="Designer">Designer</option>
                        <option value="Manager">Manager</option>
                        <option value="Other">Other</option>
                    </select>

                    <label>Company's Name</label>
                    <input
                        type="text"
                        className={Styles.input}
                        name="companyName"
                        placeholder="Enter your company's name"
                        required
                    />

                    <label>Company's Website</label>
                    <input
                        type="url"
                        name="website"
                        className={Styles.input}
                        placeholder="https://"
                        required
                    />

                    <label>Company Description</label>
                    <textarea
                        name="description"
                        className={Styles.input}
                        placeholder="Eg. E-commerce website selling traditional groceries in Tamil Nadu"
                        required
                    />
                    
                    <div className={Styles.buttonContainer}>
                        <button type="submit" className={Styles.nextButton}>Next →</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
