const CallToActionButtons = () => {
  const onResumeClick = () => {
    window.open(`${process.env.PUBLIC_URL}/resume.pdf`);
  };

  const onGithubClick = () => {
    window.open("https://github.com/PatrickVuscan");
  };

  return (
    <div className="center-content about-page__call-to-action-buttons">
      <button
        type="button"
        className="call-to-action-button"
        onClick={onGithubClick}
      >
        Check out my Github!
      </button>

      <button
        type="button"
        className="call-to-action-button"
        onClick={onResumeClick}
      >
        View my full resume here!
      </button>
    </div>
  );
};

export default CallToActionButtons;
