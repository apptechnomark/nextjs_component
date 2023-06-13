"use client";
import { Button } from "buttonlib";

import Layout from "@/components/Layout";
import Card from "@/components/Card";

import "buttonlib/dist/styles.css";

export default function page() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <Card title="Large">
          <div className="my-4 flex">
            <Button btn btn_lg>
              Placeholder Text
            </Button>
            <div className="mx-4">
              <Button btn_primary btn_lg>
                Placeholder Text
              </Button>
            </div>
            <Button btn_secondary btn_lg>
              Placeholder Text
            </Button>
            <div className="mx-4">
              <Button btn_success btn_lg>
                Placeholder Text
              </Button>
            </div>
            <Button btn_error btn_lg>
              Placeholder Text
            </Button>
            <div className="mx-4">
              <Button btn_warning btn_lg>
                Placeholder Text
              </Button>
            </div>
          </div>
          <div className="my-4 flex">
            <Button btn rounded_md btn_lg>
              Placeholder Text
            </Button>
            <div className="mx-4">
              <Button btn_primary rounded_md btn_lg>
                Placeholder Text
              </Button>
            </div>
            <Button btn_secondary rounded_md btn_lg>
              Placeholder Text
            </Button>
            <div className="mx-4">
              <Button btn_success rounded_md btn_lg>
                Placeholder Text
              </Button>
            </div>
            <Button btn_error rounded_md btn_lg>
              Placeholder Text
            </Button>
            <div className="mx-4">
              <Button btn_warning rounded_md btn_lg>
                Placeholder Text
              </Button>
            </div>
          </div>
          <div className="my-4 flex">
            <Button btn rounded_full btn_lg>
              Placeholder Text
            </Button>
            <div className="mx-4">
              <Button btn_primary rounded_full btn_lg>
                Placeholder Text
              </Button>
            </div>
            <Button btn_secondary rounded_full btn_lg>
              Placeholder Text
            </Button>
            <div className="mx-4">
              <Button btn_success rounded_full btn_lg>
                Placeholder Text
              </Button>
            </div>
            <Button btn_error rounded_full btn_lg>
              Placeholder Text
            </Button>
            <div className="mx-4">
              <Button btn_warning rounded_full btn_lg>
                Placeholder Text
              </Button>
            </div>
          </div>
        </Card>

        <Card title="Outlined">
          <div className="my-4 flex">
            <Button btn_outline>Placeholder Text</Button>
            <div className="mx-4">
              <Button btn_outline_primary>Placeholder Text</Button>
            </div>
            <Button btn_outline_secondary>Placeholder Text</Button>
            <div className="mx-4">
              <Button btn_outline_success>Placeholder Text</Button>
            </div>
            <Button btn_outline_error>Placeholder Text</Button>
            <div className="mx-4">
              <Button btn_outline_warning>Placeholder Text</Button>
            </div>
          </div>
          <div className="my-4 flex">
            <Button btn_outline rounded_md>
              Placeholder Text
            </Button>
            <div className="mx-4">
              <Button btn_outline_primary rounded_md>
                Placeholder Text
              </Button>
            </div>
            <Button btn_outline_secondary rounded_md>
              Placeholder Text
            </Button>
            <div className="mx-4">
              <Button btn_outline_success rounded_md>
                Placeholder Text
              </Button>
            </div>
            <Button btn_outline_error rounded_md>
              Placeholder Text
            </Button>
            <div className="mx-4">
              <Button btn_outline_warning rounded_md>
                Placeholder Text
              </Button>
            </div>
          </div>
          <div className="my-4 flex">
            <Button btn_outline rounded_full>
              Placeholder Text
            </Button>
            <div className="mx-4">
              <Button btn_outline_primary rounded_full>
                Placeholder Text
              </Button>
            </div>
            <Button btn_outline_secondary rounded_full>
              Placeholder Text
            </Button>
            <div className="mx-4">
              <Button btn_outline_success rounded_full>
                Placeholder Text
              </Button>
            </div>
            <Button btn_outline_error rounded_full>
              Placeholder Text
            </Button>
            <div className="mx-4">
              <Button btn_outline_warning rounded_full>
                Placeholder Text
              </Button>
            </div>
          </div>
        </Card>

        <Card title="Small">
          <div className="my-4 flex">
            <Button btn btn_sm>
              Placeholder Text
            </Button>
            <div className="mx-4">
              <Button btn_primary btn_sm>
                Placeholder Text
              </Button>
            </div>
            <Button btn_secondary btn_sm>
              Placeholder Text
            </Button>
            <div className="mx-4">
              <Button btn_success btn_sm>
                Placeholder Text
              </Button>
            </div>
            <Button btn_error btn_sm>
              Placeholder Text
            </Button>
            <div className="mx-4">
              <Button btn_warning btn_sm>
                Placeholder Text
              </Button>
            </div>
          </div>
          <div className="my-4 flex">
            <Button btn rounded_md btn_sm>
              Placeholder Text
            </Button>
            <div className="mx-4">
              <Button btn_primary rounded_md btn_sm>
                Placeholder Text
              </Button>
            </div>
            <Button btn_secondary rounded_md btn_sm>
              Placeholder Text
            </Button>
            <div className="mx-4">
              <Button btn_success rounded_md btn_sm>
                Placeholder Text
              </Button>
            </div>
            <Button btn_error rounded_md btn_sm>
              Placeholder Text
            </Button>
            <div className="mx-4">
              <Button btn_warning rounded_md btn_sm>
                Placeholder Text
              </Button>
            </div>
          </div>
          <div className="my-4 flex">
            <Button btn rounded_full btn_sm>
              Placeholder Text
            </Button>
            <div className="mx-4">
              <Button btn_primary rounded_full btn_sm>
                Placeholder Text
              </Button>
            </div>
            <Button btn_secondary rounded_full btn_sm>
              Placeholder Text
            </Button>
            <div className="mx-4">
              <Button btn_success rounded_full btn_sm>
                Placeholder Text
              </Button>
            </div>
            <Button btn_error rounded_full btn_sm>
              Placeholder Text
            </Button>
            <div className="mx-4">
              <Button btn_warning rounded_full btn_sm>
                Placeholder Text
              </Button>
            </div>
          </div>
        </Card>

        <Card title="Text">
          <div className="my-4 flex">
            <Button>Placeholder Text</Button>
            <div className="mx-4">
              <Button primary>Placeholder Text</Button>
            </div>
            <Button secondary>Placeholder Text</Button>
            <div className="mx-4">
              <Button success>Placeholder Text</Button>
            </div>
            <Button error>Placeholder Text</Button>
            <div className="mx-4">
              <Button warning>Placeholder Text</Button>
            </div>
          </div>
          <div className="my-4 flex">
            <Button rounded_md>Placeholder Text</Button>
            <div className="mx-4">
              <Button primary rounded_md>
                Placeholder Text
              </Button>
            </div>
            <Button secondary rounded_md>
              Placeholder Text
            </Button>
            <div className="mx-4">
              <Button success rounded_md>
                Placeholder Text
              </Button>
            </div>
            <Button error rounded_md>
              Placeholder Text
            </Button>
            <div className="mx-4">
              <Button warning rounded_md>
                Placeholder Text
              </Button>
            </div>
          </div>
          <div className="my-4 flex mb-10">
            <Button rounded_full btn_sm>
              Placeholder Text
            </Button>
            <div className="mx-4">
              <Button primary rounded_full btn_sm>
                Placeholder Text
              </Button>
            </div>
            <Button secondary rounded_full btn_sm>
              Placeholder Text
            </Button>
            <div className="mx-4">
              <Button success rounded_full btn_sm>
                Placeholder Text
              </Button>
            </div>
            <Button error rounded_full btn_sm>
              Placeholder Text
            </Button>
            <div className="mx-4">
              <Button warning rounded_full btn_sm>
                Placeholder Text
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
}