import SingleOrderPage from "@/containers/order/Order";
import QuotePage from "@/containers/request/Request";
import SingleSubscriptionPage from "@/containers/subscription/Subscription";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <SingleSubscriptionPage id={params.id} />
    </div>
  );
};

export default page;
