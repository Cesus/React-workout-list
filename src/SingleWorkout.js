import style from "./SingleWorkout.module.css";

const SingleWorkout = ({ title, duration, exercises, img }) => {
  return (
    <div className={style.workout}>
      <h1>{title}</h1>
      <p>{duration} minutes</p>
      <ol>
        {exercises.map((exercise) => (
          <li>{exercise}</li>
        ))}
      </ol>
      <img src={img} alt="workout" className={style.image} />
    </div>
  );
};

export default SingleWorkout;
