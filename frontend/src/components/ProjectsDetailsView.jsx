
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import CustomersDetailsProjectsTable from './CustomersDetailsProjectsTable';
import { useParams } from 'react-router-dom';
import { getCustomersById } from '../services/customer.services';
import { useEffect, useState } from 'react';
import { Paper } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import WorkIcon from '@material-ui/icons/Work';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import { getProjectById } from '../services/project.services';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));

export default function ProjectsDetailsView() {

    const { id } = useParams();

    const [project, setProject] = useState([]);

    useEffect( () =>{
        const getProject = async(id) => {
            setProject(await getProjectById(id));
        }
        getProject(id);
    }, []);

   

    const [expanded, setExpanded] = React.useState('panel1');
    
    const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    };

    return(
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography variant="h6">Detalles del Proyecto</Typography>
                </AccordionSummary>
                <AccordionDetails className="row">
                    
                    <div className="col col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <Paper elevation={3} className='p-2 mt-3 ms-4'>
                            <h6 className="ms-2 me-2"><WorkIcon />      Proyecto</h6>
                            <p className="ms-2 me-2">{project.project_name}</p>
                            <p className="ms-2 me-2">id: {project.project_id}</p>
                            <p className="ms-2 me-2 mb-3">Cliente: {project.customer_name}</p>                        
                        </Paper>
                        <Paper elevation={3} className='p-2 mt-3 ms-4'>
                            <h6 className="card-title"><PersonIcon />   Proyecto creado por</h6>
                            <p className="card-text">{project.user_name}</p>
                        </Paper>
                    </div>
                    <div className="col col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <Paper elevation={3} className='p-2 mt-3 ms-4'>                
                            <h6 className="card-title"><AccountTreeIcon />    Proyectos del Cliente</h6>
                            <p className="card-text">{project.project_address}</p>
                            <p className="card-tex">{`${project.project_city} (${project.project_province})`}</p>
                            <p className="card-text">{project.project_cp}</p>
                        </Paper>
                        <Paper elevation={3} className='p-2 mt-3 ms-4'>
                            <h6 className="card-title"><AddAlertIcon/>    Avisos</h6>
                            <p className="card-text">Sin avisos</p>
                        </Paper>
                    </div>                 
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography variant="h6">Proyectos</Typography>
                </AccordionSummary>
                <AccordionDetails className="row">
                    <CustomersDetailsProjectsTable />
                </AccordionDetails>
            </Accordion>
            
        </div>
    )
};
