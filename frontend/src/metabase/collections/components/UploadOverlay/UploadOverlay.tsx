import { t } from "ttag";

import { Center, Icon, Stack } from "metabase/ui";
import type { Collection } from "metabase-types/api";

import S from "./UploadOverlay.module.css";

export function UploadOverlay({
  isDragActive,
  collection,
}: {
  isDragActive: boolean;
  collection: Collection;
}) {
  return (
    <Center
      className={S.dragOverlay}
      pos="absolute"
      top={0}
      right={0}
      bottom={0}
      left={0}
      bd="1px dashed var(--mb-color-brand)"
      bg="brand-lighter"
      m="0.5rem 4%"
      opacity={isDragActive ? 0.9 : 0}
      p="4rem"
    >
      <Stack gap="md" c="brand" align="center" ta="center" fz="lg" fw={700}>
        <Icon name="upload" size="24" />
        <div>{t`Drop here to upload to ${collection.name}`}</div>
      </Stack>
    </Center>
  );
}
