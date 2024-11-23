import SingleOrderPage from "@/containers/order/Order";
import QuotePage from "@/containers/request/Request";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <QuotePage id={params.id} />
    </div>
  );
};

export default page;
