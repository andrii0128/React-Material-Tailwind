import { useState, useMemo } from "react";
import {
  Card,
  Input,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";

import DatePicker from "react-datepicker";
import countryList from 'react-select-country-list'

import "react-datepicker/dist/react-datepicker.css";

export function Register() {
  const [startDate, setStartDate] = useState(new Date());
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h2" color="blue-gray" className="flex justify-center py-7">
        Sign Up
      </Typography>
      <form className="w-full">
        <div className="mb-4 flex flex-col gap-3">
          <div className="md:flex md:flex-row md:gap-6">
            <Input label="Name" />
            <hr className="my-2 opacity-0"/>
            <Input label="Last Name" />
          </div>
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="w-[100%] border-[lightgray] border rounded-md focus:outline-blue-500 h-10 pl-3"/>
          <Select label="Select Gender">
            <Option>Male</Option>
            <Option>Female</Option>
            <Option>Not specified</Option>
          </Select>
          <Select label="Country">
            {
              options.map((value, index) => {
                return (
                  <Option key={index}>{value.label}</Option>
                )
              })
            }
          </Select>
          <Input size="lg" label="Province" />
          <Input size="lg" label="Personal email" />
          <Input type="password" size="lg" label="Password" />
        </div>

        <Button className="mt-6" fullWidth>
          Register
        </Button>
      </form>
    </Card>
  );
}