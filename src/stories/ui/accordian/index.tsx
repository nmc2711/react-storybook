import { ReactElement, ReactNode, MouseEvent, useState } from 'react';
import { ItemHeading, ItemContent, AccordianTableWrap } from  './styled';

interface TAccordianItem {
  title: ReactNode | string,
  content: ReactNode,
  expanded?: boolean,
  id: string,
  handleToggle?: (event: MouseEvent<HTMLButtonElement>) => void,
}

interface TAccordian {
  bordered?: boolean,
  multiselectable?: boolean,
  items: TAccordianItem[],
}

export function AccordianItems({
  title,
  content,
  expanded = false,
  id,
  handleToggle,
}: TAccordianItem): ReactElement {
  return (
    <>
      <ItemHeading>
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={id}
          onClick={handleToggle}
        >
          {title}
        </button>
      </ItemHeading>
      <ItemContent
        id={id}
        hidden={!expanded}
      >
        {content}
      </ItemContent>
    </>
  );
}

function Accordian({
  bordered = false,
  multiselectable = false,
  items,
}: TAccordian): ReactElement {
  const [openItems, setOpenItems] = useState(
    items.filter((x) => !!x.expanded).map((i) => i.id)
  );

  const toggleItem = (itemId: TAccordianItem['id']): void => {
    const newOpenItems = [...openItems];
    const itemIndex = openItems.indexOf(itemId);
    const isMultiSelectable = multiselectable;

    if (itemIndex > -1) {
      // 이미 열려져 있는 상태에서 다시 누를 경우 닫아주기 위한..
      newOpenItems.splice(itemIndex, 1);
    } else {
      if (isMultiSelectable) {
        newOpenItems.push(itemId);
      } else {
        // 멀티 아코디언 형태가 아니라면 모두 닫아주는걸 먼저하기 위한..
        newOpenItems.splice(0, newOpenItems.length);
        newOpenItems.push(itemId);
      }
    }
    setOpenItems(newOpenItems);
  };

  return (
    <AccordianTableWrap bordered={bordered}>
      {items.map((item, key) => (
        <AccordianItems 
          key={`accordionItem-${key}`}
          {...item}
          expanded={openItems.indexOf(item.id) > -1}
          handleToggle={(): void => {
            toggleItem(item.id);
          }}
        />
      ))}
    </AccordianTableWrap>
  );
}

export default Accordian;