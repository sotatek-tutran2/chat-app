import React, { FC, PropsWithChildren } from "react";
import { ModalBodyStyle } from "../../styles/ui/modal";

const ModalBody: FC<PropsWithChildren> = ({ children }) => {
  return <ModalBodyStyle>{children}</ModalBodyStyle>;
};

export default ModalBody;
