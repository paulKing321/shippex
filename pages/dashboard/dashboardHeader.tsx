import { InputComponent } from "../../components/forms"
import { Button, Flex } from "@chakra-ui/react"
import { SubmitHandler, useForm } from "react-hook-form";
import { ITrack, TrackSchema } from "./utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { Dispatch, SetStateAction } from "react";
// import { trackAWB } from "../../services";

type IProps = {
  setShowDetails: Dispatch<SetStateAction<boolean>>;
}
export const DashboardHeader = ({setShowDetails}: IProps) => {
    const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ITrack>({
    mode: 'onBlur',
    resolver: yupResolver(TrackSchema),
  });

  const handleTrack: SubmitHandler<ITrack> = async (values) => {
  //   try {
  //     const data: any = await trackAWB(values.trackID);
  //   console.log({data});
  // } catch (error) {
  //   console.log({error})
    setShowDetails(true);
  };

    return (
      <Flex bgColor="#F8FAFC" justifyContent="center" alignItems="center" w="90%" p={{ base: 8, md: 12 }} height="18vh" mx="auto">
          <Flex w={{ base: '90%', sm: '80%', md: '70%' }}>
            <Flex columnGap="20px" w="100%">
                <InputComponent bg="white" {...register('trackID')} errorMessage={errors.trackID && errors.trackID.message} placeholder="Enter AWB ID" w="100%" />
              <Button
              isLoading={isSubmitting}
              type="submit"
              onClick={handleSubmit(handleTrack)}
              bgColor="#2563EB" color="white" borderRadius="4px"
              w={{ base: '30%', md: '20%' }}
              height="40px"
              >
              Track
              </Button>
            </Flex>
          </Flex>
        </Flex>
    )
}