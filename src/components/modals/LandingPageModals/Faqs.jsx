import playStore from "../../../assets/Images/playStore.png"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faqs = () => {
  return (
    <div>
        <div className="bg-green-Primary_1 flex justify-center md:h-[150px] items-center">
        <h3 className="font-normal text-[25px]  md:text-[40px] text-[#fff] flex flex-wrap text-center py-10">Frequently Asked Questions</h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 mx-4 md:mx-0 my-11">
        <Accordion >
        <AccordionSummary
          style={{
            background:"#16956C",
            color:"white",
            fontWeight:"bolder",
          }}
          expandIcon={<ExpandMoreIcon style={{
            height:"75px",
            width:"40px",
            color:"white",
            }}

          />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className="text-[24px] font-bold" style={{
            fontWeight:'bold',
            fontSize:"20px",
            paddingLeft:'20px'
          }}>What is The Pace App ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{
            marginTop:"20px",
            paddingLeft:'20px'
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          style={{
            background:"#16956C",
            color:"white",
            fontWeight:"bolder",
          }}
          expandIcon={<ExpandMoreIcon style={{
            height:"75px",
            width:"40px",
            color:"white",
            }}

          />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className="text-[24px] font-bold" style={{
            fontWeight:'bold',
            fontSize:"20px",
            paddingLeft:'20px'
          }}>How do I earn on The Pace App?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{
            marginTop:"20px",
            paddingLeft:'20px'
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          style={{
            background:"#16956C",
            color:"white",
            fontWeight:"bolder",
          }}
          expandIcon={<ExpandMoreIcon style={{
            height:"75px",
            width:"40px",
            color:"white",
            }}

          />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className="md:text-[24px] font-bold" style={{
            fontWeight:'bold',
            fontSize:"20px",
            paddingLeft:'20px'
          }}>How to I withdraw my Earnings?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{
            marginTop:"20px",
            paddingLeft:'20px'
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          style={{
            background:"#16956C",
            color:"white",
            fontWeight:"bolder",
          }}
          expandIcon={<ExpandMoreIcon style={{
            height:"75px",
            width:"40px",
            color:"white",
            }}

          />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className="text-[24px] font-bold" style={{
            fontWeight:'bold',
            fontSize:"20px",
            paddingLeft:'20px'
          }}>When can I withdraw my Earnings?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{
            marginTop:"20px",
            paddingLeft:'20px'
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          style={{
            background:"#16956C",
            color:"white",
            fontWeight:"bolder",
          }}
          expandIcon={<ExpandMoreIcon style={{
            height:"75px",
            width:"40px",
            color:"white",
            }}

          />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className="text-[24px] font-bold" style={{
            fontWeight:'bold',
            fontSize:"20px",
            paddingLeft:'20px'
          }}>How much do The Pace App charge users?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{
            marginTop:"20px",
            paddingLeft:'20px'
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          style={{
            background:"#16956C",
            color:"white",
            fontWeight:"bolder",
          }}
          expandIcon={<ExpandMoreIcon style={{
            height:"75px",
            width:"40px",
            color:"white",
            }}

          />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className="text-[24px] font-bold" style={{
            fontWeight:'bold',
            fontSize:"20px",
            paddingLeft:'20px'
          }}>How Legit is The Pace App?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{
            marginTop:"20px",
            paddingLeft:'20px'
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
        <div className="flex items-center justify-center">
            <div className="w-[80%] bg-green-Primary_1 rounded-[30px] md:h-[255px] md:px-16 px-7 py-10 flex flex-col md:flex-row items-center justify-around ">
              <div className="flex flex-col gap-8 md:gap-0 ">                
                <div className="flex flex-row items-center justify-start leading-normal text-center " >
                <h3 className="md:text-[45px] text-[35px] font-normal text-[#fff] flex text-center">Start Earning today</h3>
                <div className='hidden w-2 h-2 mt-20 ml-1 bg-white md:mt-3 md:flex '></div>
                </div>
                <div className="flex items-center justify-start -mt-5 ">
                <h3 className="md:text-[45px] text-[35px] font-normal text-[#fff] leading-normal text-center">Download App for free</h3>
                <div className='hidden w-2 h-2 mt-3 ml-1 bg-white md:flex'></div>
                </div>
              </div>
              <div>
              <button className=' flex items-center justify-center bg-white w-[208px]  md:ml-0 mt-5 h-[71px] rounded-[83.502px]'>
            <img src={playStore}/>
            <div>
                GET IT ON <br/> <strong>Google Play</strong>
            </div>
            </button>
              </div>
            </div>

        </div>
    </div>
  )
}

export default Faqs
