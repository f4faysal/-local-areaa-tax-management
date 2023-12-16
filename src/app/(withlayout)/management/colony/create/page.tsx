"use client";

import Form from "@/components/forms/form";
import FormInput from "@/components/forms/formInput";

import { getUserInfo } from "@/services/auth.service";
import { Button, Col, Row, message } from "antd";

const CreateCategoriePage = () => {
  const { role } = getUserInfo() as any;

  // const [imageUrl, setImageUrl] = useState(
  //   "https://res.cloudinary.com/dhvuyehnq/image/upload/v1697354272/gcu3mnulmato2odnqqvp.png"
  // );

  //   const [addDepartment] = useAddDepartmentMutation();
  // const [createCategorie] = useCreateCategorieMutation();

  // const [creatAdmin] = useCreatAdminMutation();

  const onSubmit = async (data: any) => {
    message.loading("Adding Categorie...");
    try {
      // const catagoriData = { imageLink: imageUrl, ...data };
      // const res = await createCategorie(catagoriData).unwrap();
      // console.log(res);
      // if (res?.success) {
      //   setImageUrl(
      //     "https://res.cloudinary.com/dhvuyehnq/image/upload/v1697354272/gcu3mnulmato2odnqqvp.png"
      //   );
      //   message.success("Categorie added successfully");
      // }
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  return (
    <div>
      {/* <SMBreadcrumb
        items={[
          {
            label: "Manage Categories",
            path: `/${role}/categories`,
          },
          {
            label: "Create Categories",
          },
        ]}
      /> */}

      <h1>Create Colony</h1>

      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput
              name="colony_name"
              label="Colony Name"
              type="text"
              placeholder="colony name"
              size="large"
            />
          </Col>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput
              name="ward_no"
              label="Ward No"
              type="text"
              placeholder="ward number"
              size="large"
            />
          </Col>
        </Row>

        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form>
    </div>
  );
};

export default CreateCategoriePage;
