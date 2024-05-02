import React, { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import { LoginBanner } from "@/src/assects";
import Image from "next/image";
import axios from 'axios';
import { loginUrl } from "@/src/Utils/Urls/SignupUrl";
import { useRouter } from "next/router";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const router = useRouter()

  const onFinish = async (values) => {
    setLoading(true);
    const { email, password } = values;

    try {
      const response = await axios.post(loginUrl, {
        email,
        password,
      });
      const token  = response?.data?.data?.accessToken;
      if(token){
        notification.success({
          message: 'Login Successful!',
          duration: 3,
        });
        localStorage.setItem('accessToken', token);
        router.push("/dashboard")
      }
    } catch (error) {
      notification.error({
        message: 'Login Failed',
        description: error.message || 'An error occurred during login',
        duration: 3,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex justify-center items-center h-screen">
      <div className="border p-6 rounded md:w-[50%] mx-auto">
        <div className="flex items-center justify-center ">
          <Image src={LoginBanner} alt="User Login" width={400} />
        </div>
        <Form
          form={form}
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input placeholder="email" className="w-full py-3 px-4 text-lg rounded" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" className="w-full py-3 px-4 text-lg rounded" />
          </Form.Item>

          <Form.Item>
            <Button className="px-6 text-2xl pb-10" type="primary" htmlType="submit" loading={loading}>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default Login;
