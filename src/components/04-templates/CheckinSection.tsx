/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState, useEffect } from "react";

import {
  Box,
  Text,
  Flex,
  Divider,
  Collapse,
  ListItem,
  UnorderedList,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { BeatLoader } from "react-spinners";

import {
  CircleQuestion,
  TheFooterNavbar,
  TheHeader,
} from "@/components/01-atoms";
import { useNotify } from "@/hooks/useNotify";
import { WalletContext } from "@/lib/context/WalletContext";

export const CheckinSection = () => {

  const [isTrustfulVisible, setIsTrustfulVisible] = useState(false);
  const [isTrustfulVillageVisible, setIsTrustfulVillageVisible] = useState(false);
  const [isToDoNowVisible, setToDoNowVisible] = useState(false);
  const [isCheckoutForVisible, setIsCheckoutForVisible] = useState(false);
  const [isAboutPrivacyVisible, setIsAboutPrivacyVisible] = useState(false);
  const [isBadgeVisible, setIsBadgeVisible] = useState(false);
  const { notifyError } = useNotify();
  const { push } = useRouter();

  const { villagerAttestationCount } = useContext(WalletContext);

  useEffect(() => {
    if (villagerAttestationCount) {
      notifyError({
        title: "You have already checked in",
        message: "Redirecting to your badges.",
      });
      push("/my-badges");
    }
  }, [villagerAttestationCount]);

  return (
    <Flex flexDirection="column" minHeight="100vh" marginBottom="60px">
      {villagerAttestationCount !== null ? (
        <>
          <TheHeader />
          <Box
            flex={1}
            as="main"
            className="p-6 sm:px-[60px] sm:py-[80px] flex flex-col items-center"
            gap={6}
          >
            <Box
              className="px-8 py-6 mt-6 relative"
            >
              <Button
                className="px-6 py-4 text-black rounded-lg"
                _loading={{
                  opacity: 1,
                  cursor: "not-allowed",
                }}
                backgroundColor={
                  villagerAttestationCount === null ? "transparent" : "#B1EF42"
                }
                isLoading={villagerAttestationCount === null}
                spinner={<BeatLoader size={8} color="#B1EF42" />}
                _hover={{
                  bg: "bg-[#B1EF42]",
                }}
                _active={{
                  bg: "bg-[#B1EF42]",
                }}
                onClick={() => push("/my-badges")}
              >
                View Badges
              </Button>

            </Box>

            <Flex
              flexDirection={"column"}
              className="w-full h-full items-center"
            >
              <Divider className="border-slate-50 opacity-10 w-full" />
              <Flex
                className="w-full flex-row py-3 cursor-pointer"
                gap={4}
                onClick={() => setIsTrustfulVisible(!isTrustfulVisible)}
              >
                <CircleQuestion />
                <Flex flexDirection={"column"} justifyContent={"center"}>
                  <Text className="text-slate-50 text-sm font-normal leading-tight">
                    What is Trustul?
                  </Text>
                </Flex>
              </Flex>
              <Collapse in={isTrustfulVisible} animateOpacity>
                <Box p="40px" color="white" pt="20px" pb="20px">
                  Trustful is a reputation aggregator system designed to match
                  governance, participation, and efforts. Using the Ethereum
                  Attestation Service (EAS) and a badge system. We can attest to
                  specific participations and ensure that this information
                  on-chain results in a scoring system. This system can be used
                  for resource allocation, governance etc.
                </Box>
              </Collapse>
              <Divider className="border-slate-50 opacity-10 w-full" />
              <Flex
                className="w-full flex-row py-3 cursor-pointer"
                gap={4}
                onClick={() => setIsTrustfulVillageVisible(!isTrustfulVillageVisible)}
              >
                <CircleQuestion />
                <Flex flexDirection={"column"} justifyContent={"center"}>
                  <Text className="text-slate-50 text-sm font-normal leading-tight">
                    How does it work in Trustful?
                  </Text>
                </Flex>
              </Flex>
              <Collapse in={isTrustfulVillageVisible} animateOpacity>
                <Box p="40px" color="white" pt="20px" pb="20px">
                  In Trustful, your interactions and contributions will be
                  attested and stored on-chain. This promotes dialogue, avoids
                  echo chambers, and encourages participation. In the future,
                  this aggregated reputation can be used to benefit
                  participants, providing them with recognition.
                </Box>
              </Collapse>
              <Divider className="border-slate-50 opacity-10 w-full" />

              <Flex
                className="w-full flex-row py-3 cursor-pointer"
                gap={4}
                onClick={() => setIsBadgeVisible(!isBadgeVisible)}
              >
                <CircleQuestion />
                <Flex flexDirection={"column"} justifyContent={"center"}>
                  <Text className="text-slate-50 text-sm font-normal leading-tight">
                    What is a badge?
                  </Text>
                </Flex>
              </Flex>
              <Collapse in={isBadgeVisible} animateOpacity>
                <Box p="40px" color="white" pt="20px" pb="20px">
                  The badges are created with EAS and managed by Trustful, it
                  aggregates reputation based on interactions and contributions
                  during Trustful. It allows members to give and
                  receive badges recognizing their contributions and knowledge,
                  fostering real connections and deep dialogues, therefore
                  helping to build reputation scores.
                </Box>
              </Collapse>
              <Divider className="border-slate-50 opacity-10 w-full" />
              <Flex
                className="w-full flex-row py-3 cursor-pointer"
                gap={4}
                onClick={() => setIsCheckoutForVisible(!isCheckoutForVisible)}
              >
                <CircleQuestion />
                <Flex flexDirection={"column"} justifyContent={"center"}>
                  <Text className="text-slate-50 text-sm font-normal leading-tight">
                    What is the check-out for?
                  </Text>
                </Flex>
              </Flex>
              <Collapse in={isCheckoutForVisible} animateOpacity>
                <Box p="40px" color="white" pt="20px" pb="20px">
                  The check-out badge confirms that you are ending your stay at
                  Trustful. It will be used to calculate how long you
                  lived in our Trustful, which will aggregate to your
                  Trustful reputation score. It will also help us keep track
                  of how many people are currently present.
                </Box>
              </Collapse>
              <Divider className="border-slate-50 opacity-10 w-full" />

              <Flex
                className="w-full flex-row py-3 cursor-pointer"
                gap={4}
                onClick={() => setToDoNowVisible(!isToDoNowVisible)}
              >
                <CircleQuestion />
                <Flex flexDirection={"column"} justifyContent={"center"}>
                  <Text className="text-slate-50 text-sm font-normal leading-tight">
                    What to do now?
                  </Text>
                </Flex>
              </Flex>
              <Collapse in={isToDoNowVisible} animateOpacity>
                <Box p="40px" color="white" pt="20px" pb="20px">
                  Now that you have connected your wallet, you need to do the
                  check-in.
                  <UnorderedList styleType="disc" pl={4}>
                    {" "}
                    <ListItem>
                      {" "}
                      Your check-in badge will be your first badge, unlocking
                      the creation of other badges.
                    </ListItem>
                    <ListItem>
                      {" "}
                      By engaging with the event—whether you agree or disagree
                      with someone, participate in talks, or create sessions—you
                      can earn badges or respond to them.
                    </ListItem>
                    <ListItem>
                      {" "}
                      This process builds your reputation, ties to your address
                      and based on your interactions shapes your reputation
                      score.
                    </ListItem>
                  </UnorderedList>
                </Box>
              </Collapse>

              <Divider className="border-slate-50 opacity-10 w-full" />
              <Flex
                className="w-full flex-row py-3 cursor-pointer"
                gap={4}
                onClick={() => setIsAboutPrivacyVisible(!isAboutPrivacyVisible)}
              >
                <CircleQuestion />
                <Flex flexDirection={"column"} justifyContent={"center"}>
                  <Text className="text-slate-50 text-sm font-normal leading-tight">
                    About privacy
                  </Text>
                </Flex>
              </Flex>
              <Collapse in={isAboutPrivacyVisible} animateOpacity>
                <Box p="40px" color="white" pt="20px" pb="20px">
                  Trustful uses EAS to issue on-chain badges. Choose your wallet
                  carefully and issue badges and comments, keeping blockchain
                  permanence in mind. We are working to enhance it soon and keep
                  the privacy-first core in our roadmap.
                </Box>
              </Collapse>
            </Flex>
          </Box>
          <TheFooterNavbar />
        </>
      ) : (
        <Box flex={1} className="flex justify-center items-center">
          <BeatLoader size={8} color="#B1EF42" />
        </Box>
      )}
    </Flex>
  );
};
