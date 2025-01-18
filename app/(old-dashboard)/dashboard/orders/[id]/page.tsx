import SingleOrderPage from "@/containers/order/Order";

const page = ({ params }: { params: { id: string } }) => {
  
  return (
    <div>
      <SingleOrderPage id={params.id} />
    </div>
  );
};

export default page;
