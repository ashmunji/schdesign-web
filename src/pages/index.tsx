import React from 'react';
import AboutSection from '../components/AboutSection';
import CourseSection from '../components/CourseSection';
import ContactSection from '../components/ContactSection';
import Layout from '../components/Layout';
import WorksSection from '../components/WorksSection';

const IndexPage = () => (
  <Layout>
    {/* Uncomment to add courses, edit in data/courses.yml */}
    {/* <CourseSection /> */}
    <WorksSection variant="dark" />
  </Layout>
);

export default IndexPage;
