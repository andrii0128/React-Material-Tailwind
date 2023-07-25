import { useState } from "react";

import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

export function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const { username, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <Card color="transparent" shadow={false}>
        <Typography variant="h2" color="blue-gray" className="flex justify-center py-7">
          Sign In
        </Typography>
        <form className="w-[100%]">
          <div className="mb-4 flex flex-col gap-10">
            <Input 
              size="lg" 
              label="Username" 
              required 
              name="username"
              onChange={onChange} 
              value={username} 
            />
            <Input 
              type="password" 
              size="lg" 
              label="Password" 
              required 
              name="password"
              onChange={onChange} 
              value={password} 
            />
          </div>
          <div className="flex flex-row-reverse">
            <a
              href="#"
              className="font-medium transition-colors hover:text-green-500"
            >
              &nbsp;Forgot password?
            </a>
          </div>
          <Button type="submit" className="mt-6" fullWidth onSubmit={onSubmit}>
            Sign In
          </Button>
        </form>
      </Card>
    </div>
  );
}