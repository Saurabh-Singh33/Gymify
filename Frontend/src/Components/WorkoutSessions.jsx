import React from 'react'

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>Achieve Your Fitness</h1>
        <p>Push your limits, train smarter, and transform your body. Join our sessions to build strength, endurance, and confidence every day.</p>
        <img src="/img5.jpg" alt="WorkoutSession"></img>
      </div>
      <div className="wrapper">
        <h1>Our Facilities</h1>
        <p>Our state-of-the-art facilities are designed to support your fitness journey with premium equipment, spacious workout areas, and a welcoming environment for all levels of training.</p>
       
      <div className="bootcamps">
        <div>
          <h4>Bootcamp 1</h4>
          <p>High-Intensity Interval Training (HIIT) to boost your metabolism and burn fat quickly.</p>
        </div>
        <div>
          <h4>Bootcamp 2</h4>
          <p>Full-body strength training to build muscle and increase overall fitness.</p>
        </div>
        <div>
          <h4>Bootcamp 3</h4>
         <p>Cardio-focused sessions to improve endurance and cardiovascular health.</p>
        </div>
        <div>
          <h4>Bootcamp 4</h4>
          <p>Flexibility and mobility workouts to enhance range of motion and prevent injuries.</p>
        </div>
     {/*  <div>
          <h4>Bootcamp 5</h4>
          <p>Functional movement training to improve daily life performance and reduce injury risk.</p>
        </div> */}
      </div>
      </div>
    </section>
  )
}

export default WorkoutSessions
