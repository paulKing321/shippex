import { InputComponent } from "../../components/forms"
import { Button, Flex } from "@chakra-ui/react"
import { SubmitHandler, useForm } from "react-hook-form";
import { ITrack, TrackSchema } from "./utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { trackAWB } from "../../services";

export const DashboardHeader = () => {
    const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ITrack>({
    mode: 'onBlur',
    resolver: yupResolver(TrackSchema),
  });

  const handleTrack: SubmitHandler<ITrack> = async (values) => {
    try {
      const data: any = await trackAWB(values.trackID);
    console.log({data});
  } catch (error) {
    console.log({error})
  }
  };

    return (
        <Flex bgColor="#F8FAFC" justifyContent="center" alignItems="center" w="100%" p={{ base: 8, md: 12 }}>
          <Flex columnGap="20px" w="80%">
            <InputComponent bg="white" {...register('trackID')} errorMessage={errors.trackID && errors.trackID.message} placeholder="Enter AWB ID" w="full"  />
            <Button
            isLoading={isSubmitting}
            isDisabled={!!errors}
            type="submit"
            onClick={handleSubmit(handleTrack)}
            bgColor="#2563EB" color="white" borderRadius="4px"
            w="30%"
            >
            Track
            </Button>
          </Flex>
        </Flex>
    )
}