import React from 'react';

const ExpandableItem = (props) => {
    const delivery = props.delivery;
    const customer = delivery.customer;
    const restaurant = delivery.restaurant;
    return (
        <div>
            <div style={{display: 'flex'}}> <div style={{width: '200px'}}>Restaurant ID </div>: {restaurant.id} </div>
            <div style={{display: 'flex'}}> <div style={{width: '200px'}}>Restaurant Name </div>: {restaurant.name} </div>

            <div style={{display: 'flex', marginTop: '20px'}}> <div style={{width: '200px'}}>Delivery ID </div>: {delivery.id} </div>
            <div style={{display: 'flex'}}> <div style={{width: '200px'}}>Delivery Status  </div> : {delivery.deliveryStatus} </div>
            <div style={{display: 'flex'}}> <div style={{width: '200px'}}>Expected Delivery Time</div>  : {delivery.expectedDeliveryTime} </div>

            <div style={{display: 'flex', marginTop: '20px'}}> <div style={{width: '200px'}}>customer ID</div>  : {customer.id} </div>
            <div style={{display: 'flex'}}> <div style={{width: '200px'}}>customer Name</div>  : {customer.name} </div>
            <div style={{display: 'flex'}}> <div style={{width: '200px'}}>customer Type</div>  : {customer.customerType} </div>
            <div style={{display: 'flex'}}> <div style={{width: '200px'}}>customer Email</div>  : {customer.email} </div>
        </div>
    );
};

export default ExpandableItem;
