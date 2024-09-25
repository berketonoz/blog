import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import "./Article.css"; // Using the same CSS for shared styles

// Articles array with code snippets divided into parts
const articles = [
  {
    id: 1,
    title: "Stack",
    category: "Data Structures",
    publishDate: "2024-09-24",
    programmingLanguages: ["C++", "Python"],
    details: {
      "C++":
        "In C++, a stack can be implemented using the Standard Template Library (STL). The stack is a linear data structure that follows LIFO (Last In First Out) principle. The major operations on a stack are push, pop, and top.",
      Python:
        "In Python, the stack can be implemented using lists. Lists in Python provide the functionality of a dynamic array, but they can also be used to implement a stack by using the append() and pop() methods.",
    },
    codeSnippets: {
      "C++": {
        constructor: `
template <typename T>
Stack<T>::Stack(/* args */)
{
    this->size = 0;
    this->head = nullptr;
}`,
        destructor: `
template <typename T>
Stack<T>::~Stack()
{
    while (!this->isEmpty())
        T item = this->pop();
}`,
        push: `
template <typename T>
void Stack<T>::push(T value)
{
    Node<T> *new_head = new Node<T>(value);
    new_head->prev = this->head;
    this->head = new_head;
    this->size++;
}`,
        pop: `
template <typename T>
T Stack<T>::pop() {
    if (isEmpty()) {
        throw std::runtime_error("Stack is empty"); // Throw an error if stack is empty
    }

    Node<T>* temp = this->head;          // Store the top node
    T value = temp->data;                // Get the data from the top node
    this->head = this->head->prev;       // Move head to the next node
    delete temp;                         // Delete the old top node
    this->size--;                        // Decrement size
    return value;                        // Return the popped value
}`,
        isEmpty: `
template <typename T>
bool Stack<T>::isEmpty()
{
    return this->head == nullptr;
}`,
        main: `
#include <iostream>
#include <string>
#include <vector>
#include "Stack.h"
using namespace std;

int main(){
    Stack<string> stack = Stack<string>();
    vector<string> sampleVec = {"This","is","a","sample","vector"};
    cout << stack.isEmpty() << endl;
    for (int i = 0; i < sampleVec.size(); i++)
    {
        cout << "Push: " << sampleVec[i] << endl;
        stack.push(sampleVec[i]);
    }
    while (!stack.isEmpty())
    {
        cout << stack.pop() << endl;
    }
    return 0;
}`,
      },
      // Similarly, Python code snippets could be added here
      Python: {
        constructor: `
class Stack:
    def __init__(self):
        self.stack = []  # Initialize an empty list to represent the stack
        self.size = 0`, // Size starts at 0
        destructor: `
# In Python, explicit destructors like in C++ are not needed
# Python's garbage collector handles memory management.
# However, you can define a __del__ method to customize cleanup.
class Stack:
    def __del__(self):
        print("Stack is being deleted")`,
        push: `
class Stack:
    def push(self,node):
        self.stack.append(node)
        self.size += 1`,
        pop: `
class Stack:
    def pop(self):
        if self.isEmpty():
            raise RuntimeError("Stack is empty")
        self.size -= 1
        return self.stack.pop()  # Remove and return the last element`,
        isEmpty: `
class Stack:
    def is_empty(self):
        return len(self.stack) == 0`,
        main: `
if __name__ == "__main__":
    stack = Stack()
    sample_list = ["This", "is", "a", "sample", "list"]
    
    print("Is stack empty?", stack.is_empty())  # True initially

    # Push elements
    for item in sample_list:
        print(f"Pushing: {item}")
        stack.push(item)

    # Pop elements until the stack is empty
    while not stack.is_empty():
        print("Popped:", stack.pop())
    
    print("Is stack empty?", stack.is_empty())  # Should be True`,
      },
    },
  },
  // Other articles can go here
];

// Article Component for displaying detailed article view with tabs for language
const Article = () => {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [key, setKey] = useState("C++"); // Default tab

  const params = useParams();
  const id = params.id;
  const language = params.language;

  useEffect(() => {
    const selectedArticle = articles.find(
      (article) => article.id === Number(id)
    );
    if (selectedArticle) {
      setArticle(selectedArticle);
      setLoading(false);

      typeof language === "undefined"
        ? setKey(selectedArticle.programmingLanguages[0])
        : setKey(language);
      setKey(language); // Set the tab based on clicked language
    }
  }, [id, language]);

  if (loading) {
    return <div className="loading-indicator">Loading...</div>; // Return a div for loading state
  }

  return (
    <div className="article-wrapper">
      <h1 className="article-title">{article.title}</h1>
      <p className="article-category">
        <strong>Category:</strong> {article.category}
      </p>
      <p className="article-publish-date">
        <strong>Published on:</strong> {article.publishDate}
      </p>

      {/* React-Bootstrap Tabs for different languages */}
      <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
        {article.programmingLanguages.map((language) => (
          <Tab eventKey={language} title={language} key={language}>
            <div className="tab-content">
              <h2>Details for {language}</h2>
              <p>{article.details[language]}</p>

              {/* Display code snippets for C++ */}
              {article.codeSnippets[language] && (
                <>
                  <h3>Constructor</h3>
                  <CodeSnippet
                    code={article.codeSnippets[language].constructor}
                  />

                  <h3>Destructor</h3>
                  <CodeSnippet
                    code={article.codeSnippets[language].destructor}
                  />

                  <h3>Push Method</h3>
                  <CodeSnippet code={article.codeSnippets[language].push} />

                  <h3>Pop Method</h3>
                  <CodeSnippet code={article.codeSnippets[language].pop} />

                  <h3>isEmpty Method</h3>
                  <CodeSnippet code={article.codeSnippets[language].isEmpty} />

                  <h3>Main Function</h3>
                  <CodeSnippet code={article.codeSnippets[language].main} />
                </>
              )}

              {/* Add similar blocks for Python if needed */}
            </div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default Article;
