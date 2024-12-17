
import { Button, Stack, TextField } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {
  const [interest,setInterest] = useState(0)
  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)
  const [invalidPriciple,setInvalidPriciple] = useState(false)
  const [invalidRate,setInvalidRate] = useState(false)
  const [invalidYear,setInvalidYear] = useState(false)

  const validateInputs=(inputTag)=>{
    // console.log(typeof inputTag);

    // destructuring 
    const {name,value} = inputTag
    console.log(name,typeof value);

    // string match

    // console.log(!!value.match(/^\d+(\.\d+)?$/));
    // console.log(!!value.match(/^[0-9]+(\.[0-9]+)?$/));
    
    if(name=='principle')
    {
      setPrinciple(value)
      
      if(!!value.match(/^\d+(\.\d+)?$/))
      {
        setInvalidPriciple(false)
      }
      else
      {
        setInvalidPriciple(true)
      }
    }
    else if(name=='rate')
      {
        setRate(value)
        
        if(!!value.match(/^\d+(\.\d+)?$/))
        {
          setInvalidRate(false)
        }
        else
        {
          setInvalidRate(true)
        }
      }
      else if(name=='year')
        {
          setYear(value)
          
          if(!!value.match(/^\d+(\.\d+)?$/))
          {
            setInvalidYear(false)
          }
          else
          {
            setInvalidYear(true)
          }
        }
  

  }

  const handleCalculate=(e)=>{
    // e= unwantedtag
    e.preventDefault()
    if(principle && rate && year)
    {
      setInterest(principle*rate*year/100)
    }
    else{
      alert("Please fill the form completly!!")
    }
  }

  const handleReset=()=>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInvalidPriciple(false)
    setInvalidRate(false)
    setInvalidYear(false)





  }

  return (
    <>
    <div style={{width:'100%', minHeight:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{width:'600px'}} className='bg-light rounded p-5'>
      <h1>Simple Interest Calculator</h1>
      <p>Calculate Your Simple Interest Easily</p>
      <div className='bg-warning p-3 text-light text-center rounded'>
        <h1>₹ {interest}</h1>
        <p>Total Simple Interest</p>

      </div>
      <form className='mt-5'>
        {/* principle */}
        <div className='mb-3'>
        <TextField name='principle' value={principle || ""} onChange={(e)=>validateInputs(e.target)} className='w-100' id="outlined-priciple" label="Principle" variant="outlined" />
        </div>
        {/* invalid principle */}
        
          {invalidPriciple && <div className='text-danger fw-bolder mb-3'>Invalid Principle Amount </div>}
        

        {/* rate */}
        <div className='mb-3'>
        <TextField name='rate' value={rate || ""} onChange={(e)=>validateInputs(e.target)} className='w-100' id="outlined-rate" label="Rate" variant="outlined" />
        </div>

      {/* invalid rate */}
        
      {invalidRate && <div className='text-danger fw-bolder mb-3'>Invalid Rate </div>}


        {/* year */}
        <div className='mb-3'>
        <TextField name='year' value={year || ""} onChange={(e)=>validateInputs(e.target)} className='w-100' id="outlined-year" label="Year" variant="outlined" />
        </div>

        {/* invalid year */}
        
      {invalidYear && <div className='text-danger fw-bolder mb-3'>Invalid Year </div>}

        <Stack direction="row" spacing={2}>
        <Button type='submit' onClick={handleCalculate} disabled={invalidPriciple || invalidRate || invalidYear} style={{width:'50%',height:'70px'}} className='bg-dark' variant="contained">Calculate</Button>
        <Button onClick={handleReset} style={{width:'50%',height:'70px'}} variant="outlined">RESET</Button>
        </Stack>

      </form>
      </div>

    </div>
      
    </>
  )
}

export default App
