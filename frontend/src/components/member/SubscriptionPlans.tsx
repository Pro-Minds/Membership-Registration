import React, { useEffect } from 'react';
import './SubscriptionPlans.css'; // Import the CSS file for styling

const SubscriptionPlans: React.FC = () => {
    useEffect(() => {
        const plans = document.querySelectorAll('.plan');

        plans.forEach(plan => {
            plan.addEventListener('click', (event) => {
                const target = event.currentTarget as HTMLElement | null;

                if (!target) {
                    console.error('Event target is null');
                    return;
                }

                const selectedPlan = target.getAttribute('data-plan');
                const price = target.getAttribute('data-price');
                const duration = parseInt(target.getAttribute('data-duration') || '0');

                const startDate = new Date();
                const expirationDate = new Date(startDate);
                expirationDate.setMonth(startDate.getMonth() + duration);

                const subscriptionData = {
                    plan: selectedPlan,
                    price: price,
                    startDate: startDate.toISOString().split('T')[0], // Format as YYYY-MM-DD
                    expirationDate: expirationDate.toISOString().split('T')[0], // Format as YYYY-MM-DD
                };

                alert(`You selected the ${selectedPlan} plan. Start Date: ${subscriptionData.startDate}, Expiration Date: ${subscriptionData.expirationDate}`);
                sendSubscriptionToBackend(subscriptionData);
            });
        });

        const sendSubscriptionToBackend = async (data: any) => {
            try {
                const response = await fetch('/subscribe', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });
                const result = await response.json();
                console.log('Success:', result);
            } catch (error) {
                console.error('Error:', error);
            }
        };
    }, []);

    return (
        <div className="subscription-container">
            <h1>Build Your Subscription Plan</h1>
            <div className="plans">
                <div className="plan" data-plan="basic-monthly" data-price="10" data-duration="1">
                    <h2>Basic Monthly</h2>
                    <p className="price">$10<span>/month</span></p>
                    <ul>
                        <li>Access to basic features</li>
                        <li>1-month duration</li>
                    </ul>
                    <button>Select</button>
                </div>
                <div className="plan" data-plan="basic-yearly" data-price="100" data-duration="12">
                    <h2>Basic Yearly</h2>
                    <p className="price">$100<span>/year</span></p>
                    <ul>
                        <li>Access to basic features</li>
                        <li>12-month duration</li>
                    </ul>
                    <button>Select</button>
                </div>
                <div className="plan" data-plan="premium-monthly" data-price="20" data-duration="1">
                    <h2>Premium Monthly</h2>
                    <p className="price">$20<span>/month</span></p>
                    <ul>
                        <li>Access to premium features</li>
                        <li>1-month duration</li>
                    </ul>
                    <button>Select</button>
                </div>
                <div className="plan" data-plan="premium-yearly" data-price="200" data-duration="12">
                    <h2>Premium Yearly</h2>
                    <p className="price">$200<span>/year</span></p>
                    <ul>
                        <li>Access to premium features</li>
                        <li>12-month duration</li>
                    </ul>
                    <button>Select</button>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionPlans;
