"use client";

import React from "react";
import BaseLayout from "../../components/BaseLayout";
import { Typography } from "next-ts-lib";
import "next-ts-lib/dist/index.css"

interface DescProps {
  fs: string;
  lh: string;
  ls: string;
  fw: string;
}

const Desc: React.FC<DescProps> = ({ fs, lh, ls, fw }) => {
  return (
    <p className="pl-48">
      font-size:{fs} / line-height:{lh} / letter-spacing:{ls} / font-weight:{fw}
    </p>
  );
};

const typography: React.FC = () => {
  return <BaseLayout>

    <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

      <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">Heading -Regular</h2>
      <div className="pb-4">
        <div className="pl-7 w-48 inline-block  ">
          <span>H1</span>
        </div>
        <Typography type="h1" className="inline-block ">Heading 1</Typography>
        <Desc fs="40px" lh="120%" ls="2%" fw="Regular"/>
      </div>
      <div className="pb-4">
        <div className="pl-7 w-48 inline-block  ">
          <span className="">H2</span>
        </div>
        <Typography type="h2" className="inline-block ">Heading 2</Typography>
        <Desc fs="32px" lh="120%" ls="2%" fw="Regular"/>
      </div>
      <div className="pb-4">
        <div className="pl-7 w-48 inline-block  ">
          <span className="">H3</span>
        </div>
        <Typography type="h3" className="inline-block ">Heading 3</Typography>
        <Desc fs="28px" lh="120%" ls="2%" fw="Regular"/>
      </div>
      <div className="pb-4">
        <div className="pl-7 w-48 inline-block  ">
          <span className="">H4</span>
        </div>
        <Typography type="h4" className="inline-block ">Heading 4</Typography>
        <Desc fs="24px" lh="120%" ls="2%" fw="Regular"  />
      </div>
      <div className="pb-4">
        <div className="pl-7 w-48 inline-block  ">
          <span className="">H5</span>
        </div>
        <Typography type="h5" className="inline-block ">Heading 5</Typography>
        <Desc fs="20px" lh="120%" ls="2%" fw="Regular"  />
      </div>
      <div className="pb-4">
        <div className="pl-7 w-48 inline-block  ">
          <span className="">H6</span>
        </div>
        <Typography type="h6" className="inline-block ">Heading 6</Typography>
        <Desc fs="16px" lh="120%" ls="2%" fw="Regular" />
      </div>
    </div>

    {/* Body components */}

    <div className="max-w p-2 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

      <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">Body - Texts</h2>
      <div className="pb-4">
        <div className="pl-7 w-48 inline-block  ">
          <span>title</span>
        </div>
        <Typography type="title" className="inline-block ">Heading 1</Typography>
        <Typography type="sub-title" className="inline-block ">Heading 1</Typography>
        <Desc fs="20px" lh="120%" ls="2%" fw="Medium"  />
      </div>
      <div className="pb-4">
        <div className="pl-7 w-48 inline-block  ">
          <span>sub-title</span>
        </div>
        <Typography type="sub-title" className="inline-block ">Heading 2</Typography>
        <Desc fs="16px" lh="120%" ls="2%" fw="Medium"  />
      </div>
      <div className="pb-4">
        <div className="pl-7 w-48 inline-block  ">
          <span>table-title</span>
        </div>
        <table className="inline-block">
        <Typography type="table-title" className="inline-block ">Table Title</Typography></table>
        <Desc fs="16px" lh="17.5px" ls="2%" fw="Bold"  />
      </div>
      <div className="pb-4">
        <div className="pl-7 w-48 inline-block  ">
          <span>label</span>
        </div>
        <Typography type="label" className="inline-block ">Labeling</Typography>
        <Desc fs="14px" lh="150%" ls="2%" fw="Regular"/>
      </div>
      <div className="pb-4">
        <div className="pl-7 w-48 inline-block  ">
          <span>body</span>
        </div>
        <Typography type="body" className="inline-block ">Heading 5</Typography>
        <Desc fs="16px" lh="150%" ls="2%" fw="Regular"/>
      </div>
      <div className="pb-4">
        <div className="pl-7 w-48 inline-block  ">
          <span>button</span>
        </div>
        <Typography type="button" className="inline-block ">Heading 6</Typography>
        <Desc fs="16px" lh="120%" ls="2%" fw="Regular"/>
      </div>
      <div className="pb-4">
        <div className="pl-7 w-48 inline-block  ">
          <span>badge</span>
        </div>
        <Typography type="badge" className="inline-block ">Heading 6</Typography>
        <Desc fs="10px" lh="120%" ls="2%" fw="Regular"/>
      </div>
      <div className="pb-4">
        <div className="pl-7 w-48 inline-block  ">
          <span>caption</span>
        </div>
        <table className="inline-block">
        <Typography type="caption" className="inline-block ">Heading 6</Typography></table>
        <Desc fs="10px" lh="120%" ls="2%" fw="Regular"/>
      </div>
      <div className="pb-4">
        <div className="pl-7 w-48 inline-block  ">
          <span>tool-tip</span>
        </div>
        <Typography type="tool-tip" className="inline-block ">Heading 6</Typography>
        <Desc fs="14px" lh="150%" ls="2%" fw="Regular"/>
      </div>
    </div>


  </BaseLayout>;
};

export default typography;