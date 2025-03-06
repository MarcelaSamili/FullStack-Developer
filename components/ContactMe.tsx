import { File, Folder, Tree } from '@/components/ui/file-tree';
import { socials } from '@/utils/index';
import { contactme_elements } from '@/utils/index';
const ContactMe = () => {
  return (
    <section
      id="contact"
      className="relative flex justify-center items-center h-dvh"
    >
      <div className="relative flex h-[350px] w-[350px] flex-col items-center justify-center overflow-hidden rounded-3xl ">
        <Tree
          className="overflow-hidden rounded-3xl bg-bg_secondary p-4"
          initialSelectedId="7"
          initialExpandedItems={[
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
          ]}
          elements={contactme_elements}
        >
          <Folder element="src" value="1">
            <Folder value="2" element="app">
              <File value="3">
                <a href={socials.gmail} target="_blank">
                  Gmail.tsx
                </a>
              </File>
              <File value="4">
                <a href={socials.Whatsapp} target="_blank">
                  WhasApp.tsx
                </a>
              </File>
            </Folder>

            <Folder value="5" element="components">
              <Folder value="6" element="ui">
                <File value="7">
                  <a href={socials.instagram} target="_blank">
                    Instagram.tsx
                  </a>
                </File>
              </Folder>

              <File value="8">
                <a href={socials.github} target="_blank">
                  GitHub.tsx
                </a>
              </File>
              <File value="9">
                <a href={socials.linkedin} target="_blank">
                  Linkedin.tsx
                </a>
              </File>
            </Folder>

            <Folder value="10" element="lib">
              <File value="11">
                <p>Portifolio.ts</p>
              </File>
            </Folder>
          </Folder>
        </Tree>
      </div>
    </section>
  );
};
export default ContactMe;
