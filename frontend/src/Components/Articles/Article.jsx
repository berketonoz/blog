import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import "./Article.css"; // Using the same CSS for shared styles
import CommentForm from "../Comments/Comments";

// Articles array with code snippets and descriptions for each function
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
    descriptions: {
      "C++": {
        constructor:
          "This is the constructor for the Stack class. It initializes an empty stack with a size of 0 and sets the head to nullptr.",
        destructor:
          "This is the destructor for the Stack class. It ensures that all allocated memory is freed when the stack is no longer needed by popping all the elements from the stack.",
        push: "The push function adds a new element to the top of the stack. It creates a new node and links it as the new head of the stack.",
        pop: "The pop function removes the top element from the stack. If the stack is empty, it throws an error. Otherwise, it returns the top value and adjusts the head to point to the previous element.",
        isEmpty:
          "The isEmpty function checks whether the stack is empty by verifying if the head is nullptr.",
        main: "This is a sample main function that demonstrates how to use the Stack class by pushing elements onto the stack and then popping them off.",
      },
      Python: {
        constructor:
          "This is the constructor for the Stack class in Python. It initializes an empty list that will act as the stack.",
        push: "The push method appends a new element to the end of the list, representing the top of the stack.",
        pop: "The pop method removes and returns the last element of the list. It raises an IndexError if the stack is empty.",
        isEmpty:
          "The isEmpty method checks whether the stack is empty by verifying if the list has no elements.",
        main: "This is a sample main function that demonstrates how to use the Stack class in Python by pushing elements onto the stack and then popping them off.",
      },
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
      Python: {
        constructor: `
class Stack:
    def __init__(self):
        self.stack = []  # Initializes an empty stack using a list`,
        push: `
    def push(self, value):
        self.stack.append(value)  # Appends value to the stack`,
        pop: `
    def pop(self):
        if self.is_empty():
            raise IndexError("Stack is empty")  # Raise error if stack is empty
        return self.stack.pop()  # Removes and returns the last element`,
        isEmpty: `
    def is_empty(self):
        return len(self.stack) == 0  # Returns True if the stack is empty`,
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
    comments: [
    ],
  },
];

const Article = () => {
  const { id } = useParams();
  const article = articles.find((article) => article.id === parseInt(id));

  // useEffect(() => {
  //   window.scroll(0, 0);
  // }, []);

  return (
    <>
      <div className="article-wrapper">
        <h2 className="article-title">{article.title}</h2>
        <div className="article-category">{article.category}</div>
        <div className="article-publish-date">{article.publishDate}</div>
        <div className="article-languages">
          Programming Languages:
        </div>
        <Tabs defaultActiveKey={article.programmingLanguages[0]}>
          {article.programmingLanguages.map((lang) => (
            <Tab eventKey={lang} title={lang} key={lang}>
              <div className="article-details">
                <p>{article.details[lang]}</p>
                <hr />
                <h3>Constructor</h3>
                <p className="function-description">
                  {article.descriptions[lang].constructor}
                </p>
                <CodeSnippet code={article.codeSnippets[lang].constructor} />
                <h3>Destructor</h3>
                <p className="function-description">
                  {article.descriptions[lang].destructor}
                </p>
                <CodeSnippet code={article.codeSnippets[lang].destructor} />
                <h3>Push Function</h3>
                <p className="function-description">
                  {article.descriptions[lang].push}
                </p>
                <CodeSnippet code={article.codeSnippets[lang].push} />
                <h3>Pop Function</h3>
                <p className="function-description">
                  {article.descriptions[lang].pop}
                </p>
                <CodeSnippet code={article.codeSnippets[lang].pop} />
                <h3>isEmpty Function</h3>
                <p className="function-description">
                  {article.descriptions[lang].isEmpty}
                </p>
                <CodeSnippet code={article.codeSnippets[lang].isEmpty} />
                <h3>Main Function</h3>
                <p className="function-description">
                  {article.descriptions[lang].main}
                </p>
                <CodeSnippet code={article.codeSnippets[lang].main} />
              </div>
            </Tab>
          ))}
        </Tabs>
      </div>
      <CommentForm comments={article.comments}/>
    </>
  );
};

export default Article;
