import { Btn, BtnSpan } from './FeedbackOptions.styled';
export const Feedback = ({ onClickGood, onClickNeutral, onClickBad }) => {
  return (
    <>
      <Btn onClick={onClickGood}>
        <BtnSpan>Good</BtnSpan>
      </Btn>
      <Btn onClick={onClickNeutral}>
        <BtnSpan>Neutral</BtnSpan>
      </Btn>
      <Btn onClick={onClickBad}>
        <BtnSpan>Bad</BtnSpan>
      </Btn>
    </>
  );
};
