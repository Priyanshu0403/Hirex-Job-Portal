import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import companies from "../data/companies.json";
import faqs from "../data/faq.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const LandingPage = () => {
  const { user } = useUser();

  return (
    <main id="Home" className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-24">
      <section className="text-center ">
        <h3 className="text-2xl">Hi, {user?.firstName || "Guest"}! 👋</h3>
        <h1  className="flex flex-col items-center justify-center gradient-title font-extrabold text-4xl sm:text-3xl lg:text-7xl tracking-tighter py-3">
          Find Your Dream Job
          <span className="flex items-center gap-2 sm:gap-6">
            and get
            <p className="bg-gradient-to-t from-blue-200 to-blue-500 bg-clip-text text-transparent;">
              Hired
            </p>
          </span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>
      <div className="flex gap-6 justify-center">
        <Link to={"/jobs"}>
          <Button variant="blue" size="xl">
            Find Jobs
          </Button>
        </Link>
        <Link to={"/post-job"}>
          <Button variant="white" size="xl">
            Post a Job
          </Button>
        </Link>
      </div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full py-6"
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ name, id, path }) => (
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
              <img
                src={path}
                alt={name}
                className="h-9 sm:h-14 object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>


      <Card>
            <CardHeader>
              
            </CardHeader>
            <CardContent>
              <img src="/banner.jpeg" className="w-full" />
            </CardContent>
          </Card>
      

      <section id="AboutUs" className="text-center gradient-title ">
        <div>
          <h2 className="text-3xl font-bold mb-4 sm:mt-24 bg-gradient-to-t from-blue-200 to-blue-500 bg-clip-text text-transparent;">
            About Us
          </h2>
          <p className="text-gray-300 sm:text-lg max-w-3xl mx-auto">
            Hirex is a modern job portal designed to bridge the gap between
            recruiters and job seekers. Whether you're looking for your next
            dream role or seeking top talent, we've got your back. With advanced
            filtering, real-time updates, and easy communication tools, finding
            or posting jobs has never been easier.
          </p>
        </div>
        <div className=" grid grid-cols-1 py-3 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-bold">For Job Seekers</CardTitle>
            </CardHeader>
            <CardContent>
              Search and apply for jobs, track applications, and more.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-bold">For Employers</CardTitle>
            </CardHeader>
            <CardContent>
              Post jobs, manage applications, and find the best candidates.
            </CardContent>
          </Card>
        </div>
      </section>

      <Accordion id="faqs" type="multiple" className="w-full">
        <h2 className="text-3xl text-center font-bold mb-4  sm:mt-24 bg-gradient-to-t from-blue-200 to-blue-500 bg-clip-text text-transparent;">
          FAQs
        </h2>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <Card>
        <CardHeader>
          <CardTitle className="font-bold text-center gradient-title">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-t from-blue-200 to-blue-500 bg-clip-text text-transparent;">
              Contact Us
            </h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <section
            id="ContactUs"
            className="text-center py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-950 to-blue-800 rounded-2xl shadow-md"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              💬 Let's Connect
            </h2>
            <p className="text-white text-base sm:text-lg max-w-2xl mx-auto mb-6">
              Have a question, suggestion, or issue? We’d love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-20 text-white">
              <div>
                <p className="text-lg font-semibold mb-1">📧 Email</p>
                <a
                  href="mailto:support@hirex.com"
                  className="underline hover:text-blue-900 transition"
                >
                  support@hirex.com
                </a>
              </div>
              <div>
                <p className="text-lg font-semibold mb-1">📍 Location</p>
                <p>Pune, India</p>
              </div>
            </div>
          </section>
        </CardContent>
      </Card>
    </main>
  );
};

export default LandingPage;
