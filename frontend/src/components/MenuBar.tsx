import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Card,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

interface Props {
  handleSubmit: (e: React.MouseEvent) => void;
}

export function MenuBar({ handleSubmit }: Props) {
  return (
    <Card
      direction="row"
      px={2}
      gap={2}
      bg={"gray.600"}
    >
      <Menu>
        <MenuButton
          px={4}
          py={2}
          transition="all 0.2s"
          borderRadius="md"
          borderWidth="1px"
          bg={"gray.200"}
          _hover={{ bg: "green.100" }}
          _expanded={{ bg: "green.200" }}
          _focus={{ boxShadow: "outline" }}
        >
          File <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          <MenuItem>New File</MenuItem>
          <MenuItem>New Window</MenuItem>
          <MenuDivider />
          <MenuItem>Open File</MenuItem>
          <MenuItem>Save File</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton
          px={4}
          py={2}
          transition="all 0.2s"
          borderRadius="md"
          borderWidth="1px"
          bg={"gray.200"}
          _hover={{ bg: "green.100" }}
          _expanded={{ bg: "green.200" }}
          _focus={{ boxShadow: "outline" }}
        >
          Execute <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          <MenuItem onClick={handleSubmit}>Execute</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton
          px={4}
          py={2}
          transition="all 0.2s"
          borderRadius="md"
          borderWidth="1px"
          bg={"gray.200"}
          _hover={{ bg: "green.100" }}
          _expanded={{ bg: "green.200" }}
          _focus={{ boxShadow: "outline" }}
        >
          Reports <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          <MenuItem>Symbols Report</MenuItem>
          <MenuItem>Errors Report</MenuItem>
          <MenuDivider></MenuDivider>
          <MenuItem>AST Report</MenuItem>
        </MenuList>
      </Menu>
    </Card>
  );
}
