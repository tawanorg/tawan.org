import { BoxProps } from "@chakra-ui/react";
import React from "react";

export interface ISkill {
  name: string
  description: string
  iconComponent: any,
  iconSize: number,
}

export type IIconBox = Pick<BoxProps, 'boxSize'> & { color?: string }