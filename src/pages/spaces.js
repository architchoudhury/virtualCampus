import React from "react"
import Template from "../components/all/Template";
import AddIcon from "@material-ui/icons/Add";
import Button from "../components/material-kit-components/CustomButtons/Button.js";
import {MetaData, ResourcesList, CustomButton, Title,EventCard} from "../components";

const useStyles = () => ({
    addNewButton:{
        boxShadow:"none",
        fontSize: 15,
        marginLeft:'auto',
        marginRight:'auto'
    }
});
const event =
{
    display:true,
    title: 'Genderev Social Network Launch',
    startTime: new Date(2020, 3, 22, 19),
    endTime: new Date(2020, 3, 22, 21),
    description: 'genderev.com is the new social network for members of Genderev at Columbia. ',
    tags: ['Social'],
    website: 'https://genderev.com/',
    imgLink: 'https://imgur.com/hn6bJ4R.jpg',
    eventLink: ['http://meet.jit.si/genderev'],
    eventLinkHeader:['Event'],
    hostedBy: 'Genderev',
    repeat: 'weekly'
}

export default function Resources() {
    const classes = useStyles();
    return (
        <Template active={'spaces'}>
            <MetaData title={'Spaces'}/>
            <Title color={'blue'}>SPACES</Title>
            <EventCard ele={event}/>            
        </Template>
    );
}
