import React, {useState, useEffect} from 'react';
import { Table, notification } from 'antd';
import ExpandableItem from './ExpandableItem';

const TicketListing = () => {
    const openNotification = (message, description) => {
        const args = {
            message: message,
            description: description,
        };
        notification.open(args);
    };
    const getCustomer = () => {
        return JSON.parse(window.localStorage.getItem('customer'));
    }
    const [tickets,setTickets] = useState([]);

    const columns = [
        { title: 'Id', dataIndex: 'id', key: 'id' },
        { title: 'Ticket Status', dataIndex: 'ticketStatus', key: 'ticketStatus' },
        { title: 'Ticket Priority', dataIndex: 'ticketPriority', key: 'ticketPriority' },
        { title: 'Created At', dataIndex: 'createdAt', key: 'createdAt' },
    ];

    useEffect(()=>{
        const customer = getCustomer()
        fetch('http://localhost:8080/api/v1/ticket/search?status=open,ack', {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer '+customer.jwtToken
            })
        })
        .then(response => response.json())
        .then(data=>{
            if(data.httpStatus !== 'OK'){
                openNotification("Failed to fetch tickets", [])
            }else{
                const response = data.data.map(ticket => {
                    return {
                      ...ticket,
                      key: ticket.id,
                    };
                })
                setTickets(response);
            }
        });
    },[])

    return (
        <div>
            <Table
                columns={columns}
                expandable={{
                    expandedRowRender: ticket => {
                        return <ExpandableItem delivery = {ticket.delivery} />
                    },
                    rowExpandable: ticket => ticket.delivery,
                }}
                dataSource={tickets}
            />
        </div>
    );
};

export default TicketListing;