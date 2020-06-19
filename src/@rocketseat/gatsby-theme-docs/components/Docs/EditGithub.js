import React, { useContext } from "react";
import PropTypes from "prop-types";
import { MdEdit } from "react-icons/md";
import { NightModeContext } from "../../../../providers/NightModeProvider";

const EditGithub = ({ githubEditUrl }) => {
  const {mode} = useContext(NightModeContext)

  return githubEditUrl && (
    <a
      href={githubEditUrl.replace(":/", "://")}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        marginTop: "48px",
        color: mode === "night" ? "#fff" : "#78757a",
        opacity: "0.8",
        fontSize: "14px",
        fontWeight: "normal",
      }}
    >
      <MdEdit style={{ marginRight: "5px" }} />
      Edit this page on GitHub
    </a>
  );
}

EditGithub.propTypes = {
  githubEditUrl: PropTypes.string,
};

EditGithub.defaultProps = {
  githubEditUrl: null,
};

export default EditGithub