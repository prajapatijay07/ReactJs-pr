import "./Validation.css";
import { useState } from "react";

const Validation = () => {
    const [inputForm, setInputForm] = useState({
        username: "",
        email: "",
        phone: "",
        review: "",
        rating: ""
    });

    const [errors, setErrors] = useState({});
    const [submittedData, setSubmittedData] = useState(null);

    const handleChanged = (e) => {
        const { name, value } = e.target;
        setInputForm({
            ...inputForm,
            [name]: value
        });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!inputForm.username.trim()) newErrors.username = "User name is required";

        if (!inputForm.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(inputForm.email)) {
            newErrors.email = "Invalid email format";
        }

        if (!inputForm.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^[0-9]{10}$/.test(inputForm.phone)) {
            newErrors.phone = "Enter a valid 10-digit number";
        }

        if (!inputForm.review.trim()) newErrors.review = "Review is required";

        if (!inputForm.rating) {
            newErrors.rating = "Select a rating";
        } else if (parseInt(inputForm.rating) < 1 || parseInt(inputForm.rating) > 5) {
            newErrors.rating = "Rating must be 1 to 5";
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setSubmittedData(inputForm);
            alert("Form submitted successfully!");

            // Reset form
            setInputForm({
                username: "",
                email: "",
                phone: "",
                review: "",
                rating: ""
            });
            setErrors({});
        }
    };

    return (
        <div className="container">
            <h2>User Review Form</h2>
            <form onSubmit={handleSubmit} className="form-container">
                <label>User Name:</label>
                <input type="text" name="username" value={inputForm.username} onChange={handleChanged} />
                <span className="error">{errors.username}</span>

                <label>Email:</label>
                <input type="email" name="email" value={inputForm.email} onChange={handleChanged} />
                <span className="error">{errors.email}</span>

                <label>Phone:</label>
                <input type="text" name="phone" value={inputForm.phone} onChange={handleChanged} />
                <span className="error">{errors.phone}</span>

                <label>Review Text:</label>
                <textarea name="review" value={inputForm.review} onChange={handleChanged}></textarea>
                <span className="error">{errors.review}</span>

                <label>Rating:</label>
                <div className="star-rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            className={inputForm.rating >= star ? "star filled" : "star"}
                            onClick={() => setInputForm({ ...inputForm, rating: star.toString() })}
                            role="button"
                            tabIndex={0}
                            aria-label={`${star} Star`}
                        >
                            &#9733;
                        </span>
                    ))}
                </div>
                <span className="error">{errors.rating}</span>

                <button type="submit">Submit</button>
            </form>

            {submittedData && (
                <div className="card">
                    <h3>{submittedData.username}</h3>
                    <p><strong>Email:</strong> {submittedData.email}</p>
                    <p><strong>Phone:</strong> {submittedData.phone}</p>
                    <p><strong>Review:</strong> {submittedData.review}</p>
                    <p><strong>Rating:</strong> {submittedData.rating} / 5</p>
                </div>
            )}
        </div>
    );
};

export default Validation;