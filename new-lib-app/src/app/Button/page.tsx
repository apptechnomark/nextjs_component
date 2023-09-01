"use client";

import { Button } from "next-ts-lib";
import "next-ts-lib/dist/index.css";
import { BsPlusCircle } from "react-icons/bs";
import BaseLayout from "../../components/BaseLayout";

const button = () => {
  return (
    <BaseLayout>
      <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Buttons
      </h5>
      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">
          Basic with small variant
        </h2>

        <div className="pt-3 pl-4 mb-5 gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <Button
            className="btn-sm"
            variant="btn"
            onClick={() => console.log("hi")}
            disabled
          >
            Disable
          </Button>
          <Button className="btn-sm" variant="btn-primary">
            Primary
          </Button>
          <Button className="btn-sm" variant="btn-secondary">
            Secondary
          </Button>
          <Button className="btn-sm" variant="btn-success">
            Success
          </Button>
          <Button className="btn-sm" variant="btn-error">
            Error
          </Button>
          <Button className="btn-sm" variant="btn-warning">
            Warning
          </Button>
        </div>
      </div>
      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">
          Basic
        </h2>

        <div className="pt-3 pl-4 mb-5 gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <Button variant="btn" onClick={() => console.log("hi")} disabled>
            Disable
          </Button>
          <Button variant="btn-primary">Primary</Button>
          <Button variant="btn-secondary">Secondary</Button>
          <Button variant="btn-success">Success</Button>
          <Button variant="btn-error">Error</Button>
          <Button variant="btn-warning">Warning</Button>
        </div>
      </div>
      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">
          Basic with large Variant
        </h2>

        <div className="pt-3 pl-4 mb-5 gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Button
            className="btn-lg"
            variant="btn"
            onClick={() => console.log("hi")}
            disabled
          >
            Disable
          </Button>
          <Button className="btn-lg" variant="btn-primary">
            Primary
          </Button>
          <Button className="btn-lg" variant="btn-secondary">
            Secondary
          </Button>
          <Button className="btn-lg" variant="btn-success">
            Success
          </Button>
          <Button className="btn-lg" variant="btn-error">
            Error
          </Button>
          <Button className="btn-lg" variant="btn-warning">
            Warning
          </Button>
        </div>
      </div>

      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">
          Link button with small variant
        </h2>

        <div className="pt-3 pl-4 mb-5 gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <Button className="btn-sm" disabled>Disable</Button>
          <Button className="btn-sm" variant="primary">
            Primary
          </Button>
          <Button className="btn-sm" variant="secondary">
            Secondary
          </Button>
          <Button className="btn-sm" variant="success">
            Success
          </Button>
          <Button className="btn-sm" variant="error">
            Error
          </Button>
          <Button className="btn-sm" variant="warning">
            Warning
          </Button>
        </div>
      </div>

      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">
          Link button 
        </h2>

        <div className="pt-3 pl-4 mb-5 gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <Button disabled>Disable</Button>
          <Button variant="primary">
            Primary
          </Button>
          <Button variant="secondary">
            Secondary
          </Button>
          <Button variant="success">
            Success
          </Button>
          <Button variant="error">
            Error
          </Button>
          <Button variant="warning">
            Warning
          </Button>
        </div>
      </div>

      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">
          Link button with Large Variant
        </h2>

        <div className="pt-3 pl-4 mb-5 gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <Button className="btn-lg" disabled>Disable</Button>
          <Button className="btn-lg" variant="primary">
            Primary
          </Button>
          <Button className="btn-lg" variant="secondary">
            Secondary
          </Button>
          <Button className="btn-lg" variant="success">
            Success
          </Button>
          <Button className="btn-lg" variant="error">
            Error
          </Button>
          <Button className="btn-lg" variant="warning">
            Warning
          </Button>
        </div>
      </div>

      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">
          Disable Button
        </h2>

        <div className="pt-3 pl-4 mb-5 gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <Button className="btm-sm" disabled>Disable</Button>
        </div>
      </div>
     
      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">
          Round Button with small variant
        </h2>

        <div className="pt-3 pl-4 mb-5 gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <Button className="rounded-md btn-sm" variant="btn" disabled>
            Disable
          </Button>
          <Button className="rounded-md btn-sm" variant="btn-primary">
            Primary
          </Button>
          <Button className="rounded-md btn-sm" variant="btn-secondary">
            Secondary
          </Button>
          <Button className="rounded-md btn-sm" variant="btn-success">
            Success
          </Button>
          <Button className="rounded-md btn-sm" variant="btn-error">
            Error
          </Button>
          <Button className="rounded-md btn-sm" variant="btn-warning">
            Warning
          </Button>
        </div>
      </div>
      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">
          Round Button
        </h2>

        <div className="pt-3 pl-4 mb-5 gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <Button className="rounded-md" variant="btn" disabled>
            Disable
          </Button>
          <Button className="rounded-md" variant="btn-primary">
            Primary
          </Button>
          <Button className="rounded-md" variant="btn-secondary">
            Secondary
          </Button>
          <Button className="rounded-md" variant="btn-success">
            Success
          </Button>
          <Button className="rounded-md" variant="btn-error">
            Error
          </Button>
          <Button className="rounded-md" variant="btn-warning">
            Warning
          </Button>
        </div>
      </div>
      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">
          Round Button with large varinat
        </h2>

        <div className="pt-3 pl-4 mb-5 gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Button className="rounded-md btn-lg" variant="btn" disabled>
            Disable
          </Button>
          <Button className="rounded-md btn-lg" variant="btn-primary">
            Primary
          </Button>
          <Button className="rounded-md btn-lg" variant="btn-secondary">
            Secondary
          </Button>
          <Button className="rounded-md btn-lg" variant="btn-success">
            Success
          </Button>
          <Button className="rounded-md btn-lg" variant="btn-error">
            Error
          </Button>
          <Button className="rounded-md btn-lg" variant="btn-warning">
            Warning
          </Button>
        </div>
      </div>

      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">
          Full-Round Button with small variant
        </h2>

        <div className="pt-3 pl-4 mb-5 gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <Button className="btn-sm rounded-full" variant="btn" disabled>
            Disable
          </Button>
          <Button className="btn-sm rounded-full" variant="btn-primary">
            Primary
          </Button>
          <Button className="btn-sm rounded-full" variant="btn-secondary">
            Secondary
          </Button>
          <Button className="btn-sm rounded-full" variant="btn-success">
            Success
          </Button>
          <Button className="btn-sm rounded-full" variant="btn-error">
            Error
          </Button>
          <Button className="btn-sm rounded-full" variant="btn-warning">
            Warning
          </Button>
        </div>
      </div>
      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">
          Full-Round Button
        </h2>

        <div className="pt-3 pl-4 mb-5 gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <Button className="rounded-full" variant="btn" disabled>
            Disable
          </Button>
          <Button className="rounded-full" variant="btn-primary">
            Primary
          </Button>
          <Button className="rounded-full" variant="btn-secondary">
            Secondary
          </Button>
          <Button className="rounded-full" variant="btn-success">
            Success
          </Button>
          <Button className="rounded-full" variant="btn-error">
            Error
          </Button>
          <Button className="rounded-full" variant="btn-warning">
            Warning
          </Button>
        </div>
      </div>
      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">
          Full-Round Button with large variant
        </h2>

        <div className="pt-3 pl-4 mb-5 gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Button className="btn-lg rounded-full" variant="btn" disabled>
            Disable
          </Button>
          <Button className="btn-lg rounded-full" variant="btn-primary">
            Primary
          </Button>
          <Button className="btn-lg rounded-full" variant="btn-secondary">
            Secondary
          </Button>
          <Button className="btn-lg rounded-full" variant="btn-success">
            Success
          </Button>
          <Button className="btn-lg rounded-full" variant="btn-error">
            Error
          </Button>
          <Button className="btn-lg rounded-full" variant="btn-warning">
            Warning
          </Button>
        </div>
      </div>

      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">
          Outline Button with small variant
        </h2>
        <div className="pt-3 pl-4 mb-5 gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <Button className="rounded-md btn-sm" variant="btn-outline" disabled>
            Disable
          </Button>
          <Button className="rounded-md btn-sm" variant="btn-outline-primary">
            Primary
          </Button>
          <Button className="rounded-md btn-sm" variant="btn-outline-secondary">
            Secondary
          </Button>
          <Button className="rounded-md btn-sm" variant="btn-outline-success">
            Success
          </Button>
          <Button className="rounded-md btn-sm" variant="btn-outline-error">
            Error
          </Button>
          <Button className="rounded-md btn-sm" variant="btn-outline-warning">
            Warning
          </Button>
        </div>
      </div>
      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">
          Outline Button
        </h2>
        <div className="pt-3 pl-4 mb-5 gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <Button className="rounded-md" variant="btn-outline" disabled>
            Disable
          </Button>
          <Button className="rounded-md" variant="btn-outline-primary">
            Primary
          </Button>
          <Button className="rounded-md" variant="btn-outline-secondary">
            Secondary
          </Button>
          <Button className="rounded-md" variant="btn-outline-success">
            Success
          </Button>
          <Button className="rounded-md" variant="btn-outline-error">
            Error
          </Button>
          <Button className="rounded-md" variant="btn-outline-warning">
            Warning
          </Button>
        </div>
      </div>
      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">
          Outline Button with large variant
        </h2>
        <div className="pt-3 pl-4 mb-5 gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <Button className="rounded- btn-lg" variant="btn-outline" disabled>
            Disable
          </Button>
          <Button className="rounded-md btn-lg" variant="btn-outline-primary">
            Primary
          </Button>
          <Button className="rounded-md btn-lg" variant="btn-outline-secondary">
            Secondary
          </Button>
          <Button className="rounded-md btn-lg" variant="btn-outline-success">
            Success
          </Button>
          <Button className="rounded-md btn-lg" variant="btn-outline-error">
            Error
          </Button>
          <Button className="rounded-md btn-lg" variant="btn-outline-warning">
            Warning
          </Button>
        </div>
      </div>

      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">
          Button with Icon,Small variant
        </h2>
        <div className="pt-3 pl-4 mb-5 gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <Button className="rounded-md btn-sm" variant="btn" disabled>
            <span className="flex mb-1">
              <span className="mr-2 mt-1">
                <BsPlusCircle />
              </span>
              Disable
            </span>
          </Button>
          <Button className="rounded-md btn-sm" variant="btn-primary">
            <span className="flex mb-1">
              <span className="mr-2 mt-1">
                <BsPlusCircle />
              </span>
              Primary
            </span>
          </Button>
          <Button className="rounded-md btn-sm" variant="btn-secondary">
            <span className="flex mb-1">
              <span className="mr-2 mt-1">
                <BsPlusCircle />
              </span>
              Secondary
            </span>
          </Button>
          <Button className="rounded-md btn-sm" variant="btn-success">
            <span className="flex mb-1">
              <span className="mr-2 mt-1">
                <BsPlusCircle />
              </span>
              Success
            </span>
          </Button>
          <Button className="rounded-md btn-sm" variant="btn-error">
            <span className="flex mb-1">
              <span className="mr-2 mt-1">
                <BsPlusCircle />
              </span>
              Error
            </span>
          </Button>
          <Button className="rounded-md btn-sm" variant="btn-warning">
            <span className="flex mb-1">
              <span className="mr-2 mt-1">
                <BsPlusCircle />
              </span>
              Warning
            </span>
          </Button>
        </div>
      </div>
      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">
          Button with Icon
        </h2>
        <div className="pt-3 pl-4 mb-5 gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <Button className="rounded-md" variant="btn" disabled>
            <span className="flex mb-1">
              <span className="mr-2 mt-1">
                <BsPlusCircle />
              </span>
              Disable
            </span>
          </Button>
          <Button className="rounded-md" variant="btn-primary">
            <span className="flex mb-1">
              <span className="mr-2 mt-1">
                <BsPlusCircle />
              </span>
              Primary
            </span>
          </Button>
          <Button className="rounded-md" variant="btn-secondary">
            <span className="flex mb-1">
              <span className="mr-2 mt-1">
                <BsPlusCircle />
              </span>
              Secondary
            </span>
          </Button>
          <Button className="rounded-md" variant="btn-success">
            <span className="flex mb-1">
              <span className="mr-2 mt-1">
                <BsPlusCircle />
              </span>
              Success
            </span>
          </Button>
          <Button className="rounded-md" variant="btn-error">
            <span className="flex mb-1">
              <span className="mr-2 mt-1">
                <BsPlusCircle />
              </span>
              Error
            </span>
          </Button>
          <Button className="rounded-md" variant="btn-warning">
            <span className="flex mb-1">
              <span className="mr-2 mt-1">
                <BsPlusCircle />
              </span>
              Warning
            </span>
          </Button>
        </div>
      </div>
      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">
          Button with Icon,Large Variant
        </h2>
        <div className="pt-3 pl-4 mb-5 gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <Button className="rounded-md btn-lg" variant="btn" disabled>
            <span className="flex mb-1">
              <span className="mr-2 mt-1">
                <BsPlusCircle />
              </span>
              Disable
            </span>
          </Button>
          <Button className="rounded-md btn-lg" variant="btn-primary">
            <span className="flex mb-1">
              <span className="mr-2 mt-1">
                <BsPlusCircle />
              </span>
              Primary
            </span>
          </Button>
          <Button className="rounded-md btn-lg" variant="btn-secondary">
            <span className="flex mb-1">
              <span className="mr-2 mt-1">
                <BsPlusCircle />
              </span>
              Secondary
            </span>
          </Button>
          <Button className="rounded-md btn-lg" variant="btn-success">
            <span className="flex mb-1">
              <span className="mr-2 mt-1">
                <BsPlusCircle />
              </span>
              Success
            </span>
          </Button>
          <Button className="rounded-md btn-lg" variant="btn-error">
            <span className="flex mb-1">
              <span className="mr-2 mt-1">
                <BsPlusCircle />
              </span>
              Error
            </span>
          </Button>
          <Button className="rounded-md btn-lg" variant="btn-warning">
            <span className="flex mb-1">
              <span className="mr-2 mt-1">
                <BsPlusCircle />
              </span>
              Warning
            </span>
          </Button>
        </div>
      </div>
    </BaseLayout>
  );
};

export default button;
