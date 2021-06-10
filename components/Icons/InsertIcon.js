import React from "react";

import {
  IconGithub,
  IconLinkedIn,
  IconStackOverflow,
  IconBehance,
  IconMedium,
  IconTwitter,
  IconStar,
  IconFork,
  IconExternalLink,
  IconFolderOpen,
  IconDoc,
} from "./index";

const InsertIcon = ({ icon }) => {
  switch (icon) {
    case "github":
      return <IconGithub />;
    case "linkedin":
      return <IconLinkedIn />;
    case "stack-overflow":
      return <IconStackOverflow />;
    case "behance":
      return <IconBehance />;
    case "medium":
      return <IconMedium />;
    case "twitter":
      return <IconTwitter />;
    case "external-link":
      return <IconExternalLink />;
    case "star":
      return <IconStar />;
    case "fork":
      return <IconFork />;
    case "folder-open":
      return <IconFolderOpen />;
    case "doc":
      return <IconDoc />;
    default:
      return <IconGithub />;
  }
};

export default InsertIcon;
