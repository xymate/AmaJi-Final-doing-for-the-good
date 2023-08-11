import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import feedthestray from '../../Assets/feed the stray.jpeg'
import coloring from '../../Assets/coloring.jpeg'
import treegrow from '../../Assets/tree grow.jpeg'
import giftoflearning from '../../Assets/gift of learning.jpeg'
import webeforeme from '../../Assets/webeforeme.png'
import todolist from '../../Assets/todolist.png'

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={feedthestray}
                isBlog={false}
                title="Feed the Stray"
                description="Feeding stray dogs is an act of compassion and responsibility. Stray dogs often struggle to find regular meals and face hunger and malnutrition. By providing them with food, we can alleviate their suffering and contribute to their overall well-being."
                ghLink="https://www.instagram.com/p/CRTI9vHMSo3/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={coloring}
                isBlog={false}
                title="Coloring-Workshop"
                description="Our coloring workshops for children are vibrant spaces where young minds can explore their creativity, unleash their imagination, and embrace the joy of self-expression. Designed with care and tailored to different age groups, these workshops provide a nurturing environment where children can freely experiment with colors, shapes, and textures. Guided by skilled facilitators, participants engage in various coloring techniques, learn about color theory, and discover the power of art as a means of communication."
                ghLink="https://www.instagram.com/p/B9eGBVop7Aw/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={treegrow}
                isBlog={false}
                title="Earth's favourite color - Green"
                description="Our plant growing drive is a community initiative that aims to cultivate a greener and more sustainable future. By encouraging individuals to participate in this drive, we promote environmental awareness and action. Participants are provided with plant saplings, resources, and guidance on nurturing and caring for plants."
                ghLink="https://www.instagram.com/p/CCT3PYksQEn/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={giftoflearning}
                isBlog={false}
                title="Gift of Learning"
                description="Our book exchange drive is a community initiative that encourages the sharing of knowledge, fostering a love for reading and lifelong learning. Participants are invited to donate their pre-loved books and in return, they can choose from the diverse collection of donated books. "
                ghLink="https://www.instagram.com/p/CE4OJmYsEvK/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={webeforeme}
                isBlog={false}
                title="We before Me"
                description="We Before Me is a guiding principle that champions selflessness and collaboration as the foundation for a harmonious and thriving community. It encourages individuals to prioritize the collective well-being and the needs of others over personal interests. By embracing this mindset, we foster empathy, unity, and a sense of shared responsibility."
                ghLink="https://www.instagram.com/p/B8hEJWcBzDN/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={todolist}
                isBlog={false}
                title="To Do List"
                description=" To-Do App that build will allow a user to add a task to a list of to-do items. Once the task is added, the user will be able to delete it as completed once it has done."
                ghLink="https://todolist-rahul81.netlify.app/"

              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist