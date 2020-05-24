import React from "react"
import Template from "../components/all/Template";
import AddIcon from "@material-ui/icons/Add";
import Button from "../components/material-kit-components/CustomButtons/Button.js";
import {MetaData, ResourcesList, CustomButton, Title} from "../components";
import GridItem from "../components/material-kit-components/Grid/GridItem";
import {ResourcesCard, CustomTheme} from "../components";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = () => ({
    addNewButton:{
        boxShadow:"none",
        fontSize: 15,
        marginLeft:'auto',
        marginRight:'auto'
    }
});

const containerStyles = makeStyles(() => ({
  container: {
    paddingTop: "20px"
  },
  gridEle: {
    marginBottom: "40px",
    marginTop: 5
  },
  title: {
    textTransform: "capitalize",
    display: 'inline-block'
  },
  seeAll: {
    float:'right',
    display: 'inline-block',
    textDecoration: 'underline'
  },
  seeAllLink: {
    color: '#3838ff',
    "&:hover":{
      color: 'blue',
      textDecoration: 'underline'
    },
    float:'right',
    textDecoration: 'underline',
  },
  gridCont: {
    boxSizing: 'border-box',
    display: 'block'
  },
  mainGrid: {
    marginLeft: 30,
    marginRight: 30
  }
}));

export default function StudySpaces() {
    const classes = useStyles();
    const contStyle = containerStyles();
    return (
        <Template active={'study-spaces'}>
            <MetaData title={'Study Spaces'}/>
            <Title color={'blue'}>STUDY SPACES</Title>
            <div style={{textAlign:'center'}}>
                <CustomButton text={"ADD NEW RESOURCES"} href={"https://forms.gle/WWjyroMcnMsyp7Lv9"}
                            color={"orange"} size={"large"} style={{marginTop: 10, marginBottom: 25}}/>
            </div>
            <GridItem xs={12} sm={6} md={3} className={contStyle.gridEle}>
                <ResourcesCard
                    website={'https:\/\/play.pokemonshowdown.com\/'}
                    imgURL={'https:\/\/i.gifer.com\/XaGx.gif'}
                    title={'Study Spaces Meeting!'}
                    description={'Pikachu'}
                    iosLink={'https:\/\/apps.apple.com\/us\/app\/pok%C3%A9mon-go\/id1094591345'}
                    androidLink={'https:\/\/play.google.com\/store\/apps\/details?id=com.nianticlabs.pokemongo&hl=en_US'}
                    share
                />
            </GridItem>
        </Template>
    );
}
